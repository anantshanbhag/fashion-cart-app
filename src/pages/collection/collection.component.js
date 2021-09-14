import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles';

/** 
 * @createdOn 11-Aug-2021 
 * @modifiedOn 20-Aug-2021 
 */
const CollectionPage = ({ collection }) => {

	const { title, items } = collection;

	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{
					items.map(item => <CollectionItem key={item.id} item={item} />)
				}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);