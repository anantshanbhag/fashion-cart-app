import React from "react";
import { useSelector } from 'react-redux';

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

/** 
 * @createdOn 12-Aug-2021 
 * @modifiedOn 16-Sep-2021 (redux hooks)
 */
const CollectionsOverview = () => {

  const collections = useSelector(selectCollectionsForPreview);

  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) =>
          <CollectionPreview key={id} {...otherCollectionProps} />
        )
      }
    </CollectionsOverviewContainer>
  );
}

export default CollectionsOverview;