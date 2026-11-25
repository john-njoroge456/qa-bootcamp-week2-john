import { test, expect } from '@playwright/test';

test('home page has the expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
});