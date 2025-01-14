const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    console.log(await page.title()); // Imprime el título de la página
    await browser.close();
})();