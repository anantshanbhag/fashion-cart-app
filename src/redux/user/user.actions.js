import UserActionTypes from "./user.types";

/**
 * `action` to determine google sign in has started.
 * @returns `action`
 * @createdOn 7-Sep-2021
 */
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

/**
 * `action` to determine email sign in has started.
 * @param {object} emailAndPassword - Email And Password
 * @returns `action` { ..., payload: `emailAndPassword` }
 * @createdOn 7-Sep-2021
 */
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

/**
 * `action` to determine sign in is success.
 * @param {object} user - user info
 * @returns `action` { ..., payload: `user` }
 * @createdOn 7-Sep-2021
 * @modifiedOn 9-Sep-2021
 */
export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

/**
 * `action` to determine sign in is failure.
 * @param {object} error - error info
 * @returns `action` { ..., payload: `error` }
 * @createdOn 7-Sep-2021
 * @modifiedOn 9-Sep-2021
 */
export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

/**
 * `action` to check user session.
 * @returns `action`
 * @createdOn 9-Sep-2021
 */
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

/**
 * `action` to determine sign out has started.
 * @returns `action`
 * @createdOn 9-Sep-2021
 */
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

/**
 * `action` to determine sign out is success.
 * @returns `action`
 * @createdOn 9-Sep-2021
 */
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

/**
 * `action` to determine sign out is failure.
 * @param {object} error - error info
 * @returns `action` { ..., payload: `error` }
 * @createdOn 9-Sep-2021
 */
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

/**
 * `action` to determine sign up has started.
 * @param {object} userCredentials User Credential Info.
 * @returns `action` { ..., payload: `userCredentials` }
 * @createdOn 14-Sep-2021
 */
export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

/**
 * `action` to determine sign out has started.
 * @param {object} { `user`, `additionalData` } - User and Additional Data.
 * @returns `action` { ..., payload: { `user`, `additionalData` } }
 * @createdOn 14-Sep-2021
 */
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

/**
 * `action` to determine sign up is failure.
 * @param {object} error - error info
 * @returns `action` { ..., payload: `error` }
 * @createdOn 14-Sep-2021
 */
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});