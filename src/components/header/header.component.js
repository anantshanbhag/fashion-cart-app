import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from "../../assets/crown.svg"

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

/** 
 * @createdOn 2-Aug-2021 
 * @modifiedOn 16-Sep-2021 (redux hooks)
 */
const Header = () => {

	const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartHidden);
	const dispatch = useDispatch();
	const signOutStartHandler = () => dispatch(signOutStart());

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{
					currentUser ?
						<OptionLink as='div' onClick={signOutStartHandler}>SIGN OUT</OptionLink>
						:
						<OptionLink to="/signin">SIGN IN</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{!hidden && <CartDropdown />}
		</HeaderContainer>
	);
}

export default Header;