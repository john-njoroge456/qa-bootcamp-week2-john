import {test,expect} from '@playwright/test';
test ('search for pliers shows only products with pliers in their name', async ({page})=>{
await page.goto('/');
await page.getByRole('textbox',{name:'Search' }).fill('pliers');
await page.getByRole('button',{name:'Search'}).click();
await expect (page.getByText('Searched for: pliers')).toBeVisible();
const names= page.locator('[data-test="product-name"]');
await expect(names).not.toHaveCount(0);
await expect(names.filter({ hasNotText: /pliers/i })).toHaveCount(0);



});
