import core from 'puppeteer-core';
import { getOptions } from './options';
import { FileType } from './types';
let _page: core.Page | null;

// async function getPage(isDev: boolean) {
//     if (_page) {
//         return _page;
//     }
//     const options = await getOptions(isDev);
//     const browser = await core.launch(options);
//     _page = await browser.newPage();
//     return _page;
// }

export async function getScreenshot(html: string, type: FileType, isDev: boolean) {
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage();
    await _page.setViewport({ width: 2048, height: 1170 });
    await _page.setContent(html);
    const file = await _page.screenshot({ type });

    await browser.close();
    return file;
}
function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export async function getReactScreenshot(id: string, isDev: boolean) {
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage();
    await _page.setViewport({ width: 1920, height: 1080 });


    const url = `https://covalent-embed.vercel.app/${id}?embed=1234`;
    
    await _page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 60000
    });

    await timeout(5000)
    
    const file = await _page.screenshot({type: "jpeg" });

    await browser.close();
    return file;
}