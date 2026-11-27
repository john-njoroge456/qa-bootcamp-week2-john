import {test,expect} from '@playwright/test';
const API='https://api.practicesoftwaretesting.com';
test.describe('Cart API', () => {
  let cartId: string | undefined;

  test.afterEach(async ({ request }) => {
    if (cartId) {
      await request.delete(`${API}/carts/${cartId}`);
      cartId = undefined;
    }
  });
    test('C6 Missing quantity', async ({ request }) => {
    const productsResponse = await request.get(`${API}/products`);
    expect(productsResponse.status()).toBe(200);
    const products = await productsResponse.json();
    const productId = products.data[0].id;

    const createResponse = await request.post(`${API}/carts`);
    expect(createResponse.status()).toBe(201);
    const newCart = await createResponse.json();
    cartId = newCart.id;
    const addResponse = await request.post(`${API}/carts/${cartId}`, {
      headers: { Accept: 'application/json' },
      data: { product_id: productId },
    });
    expect(addResponse.status()).toBe(422);

    const body = await addResponse.json();
    expect(body.errors.quantity).toContain('The quantity field is required.');
    
  });

});