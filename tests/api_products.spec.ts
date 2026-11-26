import {test,expect} from '@playwright/test';

test('GET request on Products returns 200 status and  the first page ', async({request})=>{

    const response =await request.get('https://api.practicesoftwaretesting.com/products');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.current_page).toBe(1);
});
