import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles';

/** 
 * @createdOn 11-Aug-2021 
 * @modifiedOn 16-Sep-2021 (redux and router hooks)
 */
const CollectionPage = () => {

	const { collectionId } = useParams();	//mimics props.match.params.collectionId //Came from route: domain.com/shop/:collectionId -> eg. /shop/shoes
	const collection = useSelector(state => selectShopCollection(collectionId)(state));
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

export default CollectionPage;