import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer
} from './sign-in.styles';

/** 
 * @createdOn 4-Aug-2021 
 * @modifiedOn 16-Sep-2021 (saga, redux hooks)
 */
const SignIn = () => {

	const dispatch = useDispatch();
	const googleSignInStartHandler = () => dispatch(googleSignInStart());
	const emailSignInStartHandler = (email, password) => {
		const emailAndPassword = { email, password };
		dispatch(emailSignInStart(emailAndPassword));
	};

	const [userCredentials, setCredentials] = useState({ email: '', password: '' });
	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();
		emailSignInStartHandler(email, password);
	}

	const handleChange = event => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	}

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					label="Email"
					handleChange={handleChange}
					required
				/>

				<FormInput
					name="password"
					type="password"
					value={password}
					label="Password"
					handleChange={handleChange}
					required
				/>

				<ButtonsBarContainer>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStartHandler}
						isGoogleSignIn
					>
						Sign In with google
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
}

export default SignIn;