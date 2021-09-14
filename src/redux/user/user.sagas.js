import { takeLatest, all, call, put } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

/**
 * `put()` action `signInFailure` and display alert error message
 * @param {object} error error details
 * @createdOn 10-Sep-2021 `self`
 */
function* putSignInFailureWithMessage(error) {
  yield put(signInFailure(error));
  yield alert(`Error while signing in: ${error.message}`);
}

/**
 * Gets snapshot from user profile document by passing user authentication.
 * `put()` user data from snapshot into action payload.
 * @param {object} userAuth user authentication data after sign in with Google or with Email.
 * @param {object} additionalData user additionalData.
 * @createdOn 9-Sep-2021
 * @modifiedOn 14-Sep-2021
 */
export function* getSnapshotFromUserAuth(userAuth, additionalData) {

  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    const userData = { id: userSnapshot.id, ...userSnapshot.data() };
    yield put(signInSuccess(userData));
    yield alert(`${userData.displayName} signed in successfully!`);
  } catch (error) {
    yield* putSignInFailureWithMessage(error);
  }
}

/**
 * Saga to run after google sign in.
 * 
 * Similar to old set user in App.js like-
 * 
 * auth.onAuthStateChanged(async userAuth => {
 *     if (userAuth) {
 *       const userRef = await createUserProfileDocument(userAuth);
 *       userRef.onSnapshot(userSnapshot => {
 *         const userData = { id: userSnapshot.id, ...userSnapshot.data() };
 *         setCurrentUser(userData);
 *       });
 *     } else setCurrentUser(null);
 *   });
 * @createdOn 8-Sep-2021
 * @modifiedOn 9-Sep-2021
 */
export function* signInWithGoogle() {

  try {
    const { user: userAuth } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(userAuth);

  } catch (error) {
    yield* putSignInFailureWithMessage(error);
  }
}

/**
 * Saga to run after email sign in.
 * @param {object} action redux action with payload {`email`,`password`}
 * 
 * Similar to old set email and password in sign-in component like -
 * 
 * try {
 *     await auth.signInWithEmailAndPassword(email, password);
 *     this.setState({ email: "", password: "" });
 *   } catch (error) { console.log(error); }
 * @createdOn 8-Sep-2021
 * @modifiedOn 9-Sep-2021
 */
export function* signInWithEmail(action) {

  const { email, password } = action.payload;

  try {
    const { user: userAuth } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(userAuth);

  } catch (error) {
    yield* putSignInFailureWithMessage(error);
  }
}

/**
 * Saga to run after user session is checked on application start.
 * 1. Gets Current user after unsubscribing it
 * 2. return if user is invalid
 * 3. else, get user snapshot for 'sign in' action.
 * @createdOn 9-Sep-2021
 */
export function* isUserAuthenticated() {

  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);

  } catch (error) {
    yield* putSignInFailureWithMessage(error);
  }
}

/**
 * Saga to invoke Actions after user sign out.
 * 1. Invokes action `signOutSuccess()` in case everything goes fine.
 * 2. Invokes action `signOutFailure()` in case of an exception.
 * 
 * Similar to directly calling `auth.signOut()` on sign out button click.
 * @createdOn 9-Sep-2021
 */
export function* signOut() {

  try {
    const { email } = auth.currentUser;
    yield auth.signOut();
    yield put(signOutSuccess());
    yield alert(`${email} signed out successfully!`);

  } catch (error) {
    yield put(signOutFailure(error));
    yield alert(`Error while signing out: ${error.message}`);
  }
}

/**
 * Saga to run after user signs up.
 * @param {object} action redux action with payload {`email`,`password`,`displayName`}
 * 
 * Similar to old create user in sign-up component like -
 * 
 * try {
 *     const { user } = await auth.createUserWithEmailAndPassword(email, password);
 *     await createUserProfileDocument(user, { displayName });
 *     this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
 *   } catch (error) { console.log(error); }
 * @createdOn 14-Sep-2021
 */
export function* signUp(action) {

  const { email, password, displayName } = action.payload;

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userData = { user, additionalData: { displayName } };

    yield put(signUpSuccess(userData));

  } catch (error) {
    put(signUpFailure(error));
  }
}

/**
 * Saga to sign in the user after user signs up.
 * Get user snapshot for 'sign in' action.
 * @param {object} action redux action with payload {`user`,`additionalData`}
 * @createdOn 14-Sep-2021
 */
export function* signInAfterSignUp(action) {

  const { user: userAuth, additionalData } = action.payload;
  yield getSnapshotFromUserAuth(userAuth, additionalData);
}

/** 
 * Saga triggers on Action: when user starts to sign in with Google.
 * 1. Runs saga `signInWithGoogle`.
 * @createdOn 7-Sep-2021
 */
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

/** 
 * Saga triggers on Action: when user starts to sign in with Email.
 * 1. Runs saga `signInWithEmail`.
 * @createdOn 9-Sep-2021
 */
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/** 
 * Saga triggers on Action: when user session is checked.
 * 1. Runs saga `isUserAuthenticated`.
 * @createdOn 9-Sep-2021
 */
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

/** 
 * Saga triggers on Action: when user starts to sign out.
 * 1. Runs saga `signOut`.
 * @createdOn 9-Sep-2021
 */
export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

/** 
 * Saga triggers on Action: when user starts to sign up.
 * 1. Runs saga `signUp`.
 * @createdOn 14-Sep-2021
 */
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

/** 
 * Saga triggers on Action: when user signs up successfully.
 * 1. Runs saga `signInAfterSignUp`.
 * @createdOn 14-Sep-2021
 */
export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

/** 
 * All User Sagas synchronously executed.
 * @note called in `rootSaga()`. createSagaMiddleware from 'redux-saga' runs `rootSaga()` in the Redux Store.
 * 1. `all()` calls all user sagas one by one.
 * @createdOn 7-Sep-2021
 */
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}