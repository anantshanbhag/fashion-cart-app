import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

/**
 * HOC to add spinner functionality to existing component.
 * @param WrappedComponent A Component with props: isLoading and other existing props .
 * @returns Spinner if isLoading is true or the `WrappedComponent`
 * @createdOn 26-Aug-2021 12pm
 */
const WithSpinner = WrappedComponent => {

	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading

			? <SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>

			: <WrappedComponent {...otherProps} />
	};

	return Spinner
};

export default WithSpinner;