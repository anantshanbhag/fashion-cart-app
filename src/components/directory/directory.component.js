import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

/** 
 * @createdOn 12-Aug-2021 
 * @modifiedOn 16-Sep-2021 (redux hooks)
 */
const Directory = () => {

	const sections = useSelector(selectDirectorySections);

	return (
		<DirectoryMenuContainer>
			{
				sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))
			}
		</DirectoryMenuContainer>);
}

export default Directory;