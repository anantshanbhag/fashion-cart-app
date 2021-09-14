import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

/** 
 * @createdOn 4-Aug-2021 
 * @modifiedOn 20-Aug-2021 
 */
const SignInAndSignUpPage = () => (
	<SignInAndSignUpContainer>
		<SignIn />
		<SignUp />
	</SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;