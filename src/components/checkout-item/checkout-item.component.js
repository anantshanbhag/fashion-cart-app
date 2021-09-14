import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItem, decreaseItem } from '../../redux/cart/cart.actions';

import {
	CheckoutItemContainer,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer
} from './checkout-item.styles';

/** 
 * @createdOn 11-Aug-2021 
 * @modifiedOn 20-Aug-2021 
 */
const CheckoutItem = ({ cartItem, dispatch }) => {

	const { id, name, imageUrl, price, quantity } = cartItem;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={() => dispatch(decreaseItem(id))}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={() => dispatch(clearItem(id))}>&#10005;</RemoveButtonContainer>
		</CheckoutItemContainer>
	)
};

export default connect()(CheckoutItem);