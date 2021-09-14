import { createSelector } from 'reselect';

const selectCart = state => state.cart;

/**
 * Select cart items from cart.
 * @returns `cartItems` from cart state.
 * @createdOn 11-Aug-2021
 */
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

/**
 * Select count of cart items from cart.
 * @returns count calculated from `cartItems` in cart state.
 * @createdOn 11-Aug-2021
 */
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

/**
 * Select total of cart items from cart.
 * @returns total calculated from `cartItems` in cart state.
 * @createdOn 11-Aug-2021
 */
export const selectCartPriceTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.price, 0)
);

/**
 * Select a flag if cart is hidden or shown.
 * @returns `hidden` from cart state.
 * @createdOn 11-Aug-2021
 */
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);