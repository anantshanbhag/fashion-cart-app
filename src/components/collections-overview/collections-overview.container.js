import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

/** 
 * Container Pattern Component - compose is used to curry all the functions.
 * Similar to - connect(mapStateToProps)(WithSpinner(CollectionsOverview))
 * @createdOn 6-Sep-2021
 */
const CollectionsOverviewContainer = compose(

  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;