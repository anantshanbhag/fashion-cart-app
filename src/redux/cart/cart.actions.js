import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEMS,
  payload: item
});

export const decreaseItem = id => ({
  type: CartActionTypes.DECREASE_ITEMS,
  payload: id
});

export const clearItem = id => ({
  type: CartActionTypes.CLEAR_ITEMS,
  payload: id
});