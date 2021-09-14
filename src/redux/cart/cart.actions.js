import CartActionTypes from "./cart.types";

/**
 * `action` to hide/show cart dropdown.
 * @returns `action`
 * @createdOn 10-Aug-2021
 */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/**
 * `action` to add item in the cart.
 * @param {object} item - cart item
 * @returns `action` { ..., payload: `item` }
 * @createdOn 11-Aug-2021
 */
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEMS,
  payload: item
});

/**
 * `action` to decrease item quantity from the cart.
 * @param {object} id - id of cart item
 * @returns `action` { ..., payload: `id` }
 * @createdOn 11-Aug-2021
 */
export const decreaseItem = id => ({
  type: CartActionTypes.DECREASE_ITEMS,
  payload: id
});

/**
 * `action` to remove item from the cart.
 * @param {object} id - id of cart item
 * @returns `action` { ..., payload: `id` }
 * @createdOn 11-Aug-2021
 */
export const clearItem = id => ({
  type: CartActionTypes.CLEAR_ITEMS,
  payload: id
});

/**
 * `action` to clear the cart.
 * @returns `action`
 * @createdOn 14-Sep-2021
 */
export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
