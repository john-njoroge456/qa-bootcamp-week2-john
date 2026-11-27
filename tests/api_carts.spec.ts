import {test, expect} from '@playwright/test';
const API= 'https://api.practicesoftwaretesting.com';
test.describe('Cart API', () => {
let cartId: string | undefined;
test.afterEach(async ({ request }) => {
    if (cartId) {
      await request.delete(`${API}/carts/${cartId}`);
      cartId = undefined;
    }
  });
test ('creating a cart and adding a product returns the expected responses',async({request})=>{
const createResponse=await request.post(`${API}/carts`);
expect(createResponse.status()).toBe(201);
const newCart=await createResponse.json();
cartId = newCart.id;
expect(newCart.id).toBeTruthy();

const productResponse=await request.get(`${API}/products`);
expect(productResponse.status()).toBe(200);
const products = await productResponse.json();
const productId = products.data[0].id;
 
const addResponse = await  request.post(`${API}/carts/${newCart.id}`,{
    data : {product_id :productId, quantity:1},
});
expect (addResponse.status()).toBe(200); 
const addBody = await addResponse.json();
expect(addBody.result).toBe('item added or updated');


});
  test('requesting a cart that does not exist returns 404', async ({ request }) => {
    const response = await request.get(`${API}/carts/cart-that-does-not-exist`);
    expect(response.status()).toBe(404);
  });

});