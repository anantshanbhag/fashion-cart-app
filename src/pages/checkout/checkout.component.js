import React from 'react';
import { useSelector} from 'react-redux';

import { selectCartItems, selectCartPriceTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer
} from './checkout.styles';

/** 
 * @createdOn 11-Aug-2021 
 * @modifiedOn 16-Sep-2021 (redux hooks)
 */
const CheckoutPage = () => {

	const cartItems = useSelector(selectCartItems);
	const cartPriceTotal = useSelector(selectCartPriceTotal);

	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>

			{cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}

			<TotalContainer>TOTAL: ₹{cartPriceTotal}</TotalContainer>
			<WarningContainer>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</WarningContainer>
			<StripeCheckoutButton price={cartPriceTotal} />
		</CheckoutPageContainer>
	);
}

export default CheckoutPage;