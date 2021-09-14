/**
 * Util to add item to cart.
 * @param {object[]} cartItems list of cart items.
 * @param {object} cartItemToAdd cart item to add to list of cart items.
 * @returns `cartItems` with additional `cartItemToAdd` with adequate quantity.
 * @createdOn 11-Aug-2021
 */
export const addItemToCart = (cartItems, cartItemToAdd) => cartItems
  .some(cartItem => cartItem.id === cartItemToAdd.id)
  ? cartItems.map(
    cartItem => cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
  : [...cartItems, { ...cartItemToAdd, quantity: 1 }];

/**
 * Util to decrease item from cart.
 * @param {object[]} cartItems list of cart items.
 * @param {string} id cart item identifier.
 * @returns `cartItems` with decreased item quantity.
 * @createdOn 11-Aug-2021
 */
export const decreaseItemFromCart = (cartItems, id) => cartItems
  .map(cartItem => cartItem.id === id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem)
  .filter(cartItem => cartItem.quantity > 0);

/**
 * Util to clear item from cart.
 * @param {object[]} cartItems list of cart items.
 * @param {string} id cart item identifier.
 * @returns `cartItems` with removed cart item.
 * @createdOn 11-Aug-2021
 */
export const clearItemFromCart = (cartItems, id) => cartItems.filter(cartItem => cartItem.id !== id);