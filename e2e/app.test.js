// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer');

jest.setTimeout(30000);

describe('e2e app testing ', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      defaultViewport: null,
      headless: false,
      slowMo: 250,
    });

    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('Money exchange flow', async () => {
    // go to exchange page
    await page.click('a[href$="#/exchange"]');

    // type to FROM input
    await page.type('[data-test-id="exchange-from"]', '25');

    // reverse
    await page.click('[data-test-id="reverse"]');

    // continue
    await page.click('[data-test-id="continue"]');

    // add comment for exchange
    await page.type('[data-test-id="comment"]', 'Test');

    // submit exchange
    await page.click('[data-test-id="exchange"]');

    // wait for exchange finish
    await page.waitFor(1000);

    // got it
    await page.click('[data-test-id="got-it"]');
  });
});
