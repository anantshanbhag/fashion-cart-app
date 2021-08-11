export const addItemToCart = (cartItems, cartItemToAdd) => cartItems
  .some(cartItem => cartItem.id === cartItemToAdd.id)
  ? cartItems.map(
    cartItem => cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
  : [...cartItems, { ...cartItemToAdd, quantity: 1 }];

export const decreaseItemFromCart = (cartItems, id) => cartItems
  .map(cartItem => cartItem.id === id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem)
  .filter(cartItem => cartItem.quantity > 0);

export const clearItemFromCart = (cartItems, id) => cartItems.filter(cartItem => cartItem.id !== id);