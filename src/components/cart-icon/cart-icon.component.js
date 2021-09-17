import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

/** 
 * @createdOn 10-Aug-2021 
 * @modifiedOn 16-Sep-2021 (redux hooks)
 */
const CartIcon = () => {

  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const toggleCartHiddenHandler = () => dispatch(toggleCartHidden());

  return (
    <CartContainer onClick={toggleCartHiddenHandler}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
}

export default CartIcon