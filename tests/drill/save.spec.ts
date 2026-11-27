import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

const pageUrl = pathToFileURL(path.join(__dirname, 'index.html')).href;

test('Save shows the Saved message', async ({ page }) => {
  await page.goto(pageUrl);
  await page.getByRole('button', { name: 'Save' }).click();

await expect(page.locator('#status')).toHaveText('Saved');  
});