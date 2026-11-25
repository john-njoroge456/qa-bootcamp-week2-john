import {test,expect} from '@playwright/test';
const email = 'invalidemail@example.com';
const password = 'WrongPassword123!';

test('Invalid login is rejected and shows invalid email or Password',async({page})=>{
    await page.goto('/auth/login');
    await page.getByLabel('Email address').fill(email);
    await page.getByPlaceholder('Your password').fill(password);
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Invalid email or password')).toBeVisible();
});