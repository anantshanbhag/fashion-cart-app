import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

/** @createdOn 20-Aug-2021 */
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;