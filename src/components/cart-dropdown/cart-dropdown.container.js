import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

/** 
 * Container Pattern Component - compose connect and withRouter - used to curry the functions.
 * Similar to - connect(mapStateToProps)(withRouter(CartDropdown))
 * @createdOn 6-Sep-2021
 */
const CartDropdownContainer = compose(

	connect(mapStateToProps),
	withRouter
)(CartDropdown);

export default CartDropdownContainer;