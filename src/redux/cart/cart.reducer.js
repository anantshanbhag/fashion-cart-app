import CartActionTypes from "./cart.types";
import { addItemToCart, decreaseItemFromCart, clearItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.DECREASE_ITEMS:
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEMS:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
}

export default cartReducer;