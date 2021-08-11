import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItem, decreaseItem } from '../../redux/cart/cart.actions';

import "./checkout-item.styles.scss"

const CheckoutItem = ({ cartItem, dispatch }) => {

	const { id, name, imageUrl, price, quantity } = cartItem;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => dispatch(decreaseItem(id))}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => dispatch(clearItem(id))}>&#10005;</div>
		</div>
	)
};

export default connect()(CheckoutItem);