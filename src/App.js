import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignOut from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  //unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  /*componentDidMount() {
    checkUserSession();
  }*/

    return (
      <div>
        <Header />

        <Switch>
          < Route exact path='/' component={HomePage} />
          < Route path='/shop' component={ShopPage} />
          < Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignOut />)} />
          < Route path='/checkout' component={CheckoutPage} />



        </Switch>
      </div>
    );
}

const mapsStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapsStateToProps, mapDispatchToProps)(App);
