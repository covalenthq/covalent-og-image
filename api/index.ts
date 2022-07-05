import { IncomingMessage, ServerResponse } from 'http';
import { parseRequest } from './_lib/parser';
import { getScreenshot } from './_lib/chromium';
import { getHtml } from './_lib/template';
import { parse } from 'url';
const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    try {
        const parsedReq = parseRequest(req);
        const { pathname, query } = parse(req.url || '/', true);
        const {images, widths, heights, theme, md, subtitle, image } = (query || {});
        console.log(images, widths, heights, theme, md, subtitle, image, pathname)
        const html = getHtml(parsedReq);
        if (isHtmlDebug) {
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
            return;
        }
        parsedReq.image = "";
        const { fileType } = parsedReq;
        const file = await getScreenshot(html, fileType, isDev);
        // var fileContents = Buffer.from(file, "base64");
        res.setHeader('Content-Disposition', 'attachment; filename="test.png"');
        res.statusCode = 200;
        res.setHeader('Content-Type', `image/${fileType}`);
        console.log(fileType)
        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.end(file);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
        console.error(e);
    }
}
