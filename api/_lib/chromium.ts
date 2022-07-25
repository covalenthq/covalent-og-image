import core from 'puppeteer-core';
import { getOptions } from './options';
import { FileType } from './types';
let _page: core.Page | null;

async function getPage(isDev: boolean) {
    if (_page) {
        return _page;
    }
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage();
    return _page;
}

export async function getScreenshot(html: string, type: FileType, isDev: boolean) {
    const page = await getPage(isDev);
    await page.setViewport({ width: 2048, height: 1170 });
    await page.setContent(html);
    const file = await page.screenshot({ type });
    return file;
}

export async function getReactScreenshot(id: string, isDev: boolean) {
    const page = await getPage(isDev);
    await page.setViewport({ width: 2048, height: 1170 });
    
    // const page = await browser.newPage();
    const url = `https://covalent-embed.vercel.app/${id}?embed=1234`;
    
    await page.goto(url, {
        waitUntil: 'networkidle2'
    });
    
    const file = await page.screenshot({type: "png" });
    page.close();
    return file;
}