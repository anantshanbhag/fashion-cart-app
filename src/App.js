import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

/** 
 * @createdOn 4-Aug-2021 
 * @modifiedOn 16-Sep-2021 (saga, hooks)
 */
const App = () => {

  const currentUser = useSelector(selectCurrentUser); //mimics mapStateToProps = createStructuredSelector( {currentUser: selectCurrentUser} );  //working: useSelector re runs whenever the state changes where the selector points to.
  const dispatch = useDispatch();

  useEffect(() => dispatch(checkUserSession()), [dispatch]);  //mimics mapDispatchToProps = dispatch => ({checkUserSession: () => dispatch(checkUserSession()});

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() =>
          currentUser ? <Redirect to='/' />
            : <SignInAndSignUpPage />
        } />
      </Switch>
    </div>
  );
}

export default App;