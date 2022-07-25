import { ServerResponse } from 'http';
import { parseRequest } from './_lib/parser';
import { getReactScreenshot, getScreenshot } from './_lib/chromium';
import { getHtml } from './_lib/websiteTemplate';
const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handler(req: any, res: ServerResponse) {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.method === 'GET'){
        try {

            const parsedReq = parseRequest(req);
            if(parsedReq.id === ""){
                const html = getHtml(parsedReq);
                if (isHtmlDebug) {
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                    return;
                }
                parsedReq.image = "";
                const { fileType } = parsedReq;
                const file = await getScreenshot(html, fileType, isDev);
                res.statusCode = 200;
                res.setHeader('Content-Type', `image/${fileType}`);
                res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
                res.end(file);
            }else{
                try {
                    const file = await getReactScreenshot(parsedReq.id, isDev);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', `image/png`);
                    res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
                    res.end(file);
            
                } catch (e) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
                    console.error(e);
                }
            }
            
    
        } catch (e) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
            console.error(e);
        }
    } else{
        try {
            const file = await getReactScreenshot(req.body.id, isDev);
            res.statusCode = 200;
            res.setHeader('Content-Type', `image/png`);
            res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
            res.end(file);
    
        } catch (e) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
            console.error(e);
        }
    }
    
}
