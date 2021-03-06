const baseURL = "https://fakestoreapi.com";

async function callAPI(endpoint, options) {
  const response = await fetch(`${baseURL}/${endpoint}`, options);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data;
}

export async function fetchProducts() {
  return callAPI("products");
}

export async function fetchProduct(id) {
  return callAPI(`products/${id}`);
}

export async function fetchCategories() {
  return callAPI("products/categories");
}

export async function fetchCart(cartId) {
  return callAPI(`carts/${cartId}`);
}

export async function postItemToCart(cartId, productId, quantity) {
  return callAPI(`carts/${cartId}/items`, {
    method: 'POST',
    body: JSON.stringify({ id: productId, quantity })
  })
}

export async function deleteItemFromCart(cartId, productId) {
  return callAPI(`carts/${cartId}/items/${productId}`, {
    method: 'DELETE',
  })
}