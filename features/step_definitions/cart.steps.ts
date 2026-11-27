import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import 'dotenv/config';

setDefaultTimeout(30_000);

const BASE_URL = process.env.TOOLSHOP_URL ?? 'https://practicesoftwaretesting.com';

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given('the shopper is on the Toolshop home page', async () => {
  await page.goto(BASE_URL);
});

Given('the cart is empty', async () => {
  // A new browser starts with an empty cart, so there is nothing to do.
});

When('the shopper opens the Bolt Cutters product page', async () => {
  await page.getByText('Bolt Cutters').click();
});

When('adds it to the cart', async () => {
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1');
});

Then('the cart shows Bolt Cutters with a quantity of 1', async () => {
  await page.goto(`${BASE_URL}/checkout`);
    await expect(page.locator('[data-test="product-title"]')).toHaveText('Bolt Cutters');
  await expect(page.getByLabel('Quantity for Bolt Cutters')).toHaveValue('1');
});

Then('the line total matches the product price of $48.41', async () => {
  await expect(page.locator('[data-test="line-price"]')).toHaveText('$48.41');
});