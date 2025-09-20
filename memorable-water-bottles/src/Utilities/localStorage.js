/**
 * 1.to get something from local storage , you will get it as a string
 * 2.convert this to javascript object/array
 *
 */

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }

  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  cart.push(id);

  //save new cart to the local storage

  saveCartToLocalStorage(cart);
};

export { getCartFromLocalStorage, addItemToCartLocalStorage };
