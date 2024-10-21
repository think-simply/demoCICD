const { setDefaultTimeout, Before, After } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const page = require("@playwright/test");

Before(async () => {
  let browser = await page.chromium.launch({
    headless: true,
    channel: "chrome",
  });
  global.browser = browser;
  const context = await browser.newContext();
  global.page = await context.newPage();
});

After(async () => {
  await global.browser.close();
});

setDefaultTimeout(10000);
