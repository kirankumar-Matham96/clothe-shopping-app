/* eslint-disable*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/Shop/Shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/Sign-in-sign-up-pages/signInAndSignUp.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribedFromAuth = null;

  componentDidMount() {
    //auth.onAuthStateChanged method will return unsubscribe() method. {firebase docs}
    this.unsubscribedFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth(); //to unsubscribe authentication
  }

  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
