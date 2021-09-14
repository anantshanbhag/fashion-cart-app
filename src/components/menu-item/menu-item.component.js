import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle
} from './menu-item.styles';

/** 
 * @createdOn 31-July-2021 
 * @modifiedOn 20-Aug-2021 
 */
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemContainer
		size={size}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<BackgroundImageContainer
			className='background-image'
			imageUrl={imageUrl}
		/>
		<ContentContainer className='content'>
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubtitle>SHOP NOW</ContentSubtitle>
		</ContentContainer>
	</MenuItemContainer>
);

export default withRouter(MenuItem);