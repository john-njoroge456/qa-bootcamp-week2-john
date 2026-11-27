import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/home-page';

test('C3 Sort by price', async ({ page }) => {
  const homePage = new Homepage(page);

  await homePage.goto();
  await homePage.sortBy('Price (Low - High)');
  await expect(homePage.sortingCompleted).toBeVisible();

  const prices = await homePage.getPrices();
  expect(prices.length).toBeGreaterThanOrEqual(2);

  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});