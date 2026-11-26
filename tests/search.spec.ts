import {test, expect} from '@playwright/test';
import {Homepage} from '../pages/home-page';
test ('Searching for pliers shows only products with pliers in their name',async({page})=>{
    const homePage =new Homepage(page);
    await  homePage.goto();
    await homePage.search('pliers');

    await expect(homePage.searchResults('pliers')).toBeVisible();
    await expect (homePage.productName).not.toHaveCount(0);
    await expect(homePage.productName.filter({hasNotText: /plier/i})).toHaveCount(0);
})