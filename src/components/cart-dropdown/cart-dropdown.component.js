import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import "./cart-dropdown.styles.scss";

/** 
 * @createdOn 11-Aug-2021 
 * @modifiedOn 16-Sep-2021 (saga, redux & router hooks)
 */
const CartDropdown = () => {

	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const history = useHistory();	//mimics withRouter(Component) HOC pattern

	const checkoutHandler = () => {
		history.push(`/checkout`);
		dispatch(toggleCartHidden());
	};

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length
					? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
					: <span className="empty-message">Your cart is empty</span>
				}
			</div>
			<CustomButton onClick={checkoutHandler}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
}

export default CartDropdown;