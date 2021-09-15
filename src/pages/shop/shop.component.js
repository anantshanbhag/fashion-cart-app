import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

/** 
 * @createdOn 2-Aug-2021 
 * @modifiedOn 15-Sep-2021 (saga, hooks)
 */
const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();  //function body mimics componentDidMount
    return () => { /* return function mimics componentWillUnmount */ };
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

/** @createdOn 14-Sep-2021 */
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);