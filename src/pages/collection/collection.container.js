import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state)
});

/** 
 * Container Pattern Component - compose connect and WithSpinner - used to curry the functions.
 * Similar to - connect(mapStateToProps)(WithSpinner(CollectionPage))
 * @createdOn 6-Sep-2021
 */
const CollectionPageContainer = compose(

	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;