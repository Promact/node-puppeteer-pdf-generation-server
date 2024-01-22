// Create a nodejs based websocket api which is a wrapper around puppeteer package to generate PDF from html
import app from 'express';
import { createServer } from 'http';
import ws from 'ws';
import puppeteer from 'puppeteer';

const server = createServer(app);
const wss = new ws.Server({ server });

wss.on('connection', async (ws) => {
wss.on('message', async (message) => {
    const { html, options } = JSON.parse(message.toString());
    const browser = await puppeteer.launch({          
        args: [
            "--headless",
            "--disable-gpu",
            "--disable-dev-shm-usage",
            "--remote-debugging-port=9222",
            "--remote-debugging-address=0.0.0.0"
        ]
    });
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf(options ?? {
        printBackground: true,
        format: 'A4'
    });
    await browser.close();
    wss.send(pdf);
});
});

