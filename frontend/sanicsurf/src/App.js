import React, { Component } from 'react';
import './App.css'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { Link, IndexLink } from 'react-router';
import { firebase, auth } from './utils/firebase';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked(e) {
    e.preventDefault();

    auth.signOut();
  }

  sessionButton() {
    if (!this.state.currentUser ) {
      return <LoginButton loginButtonClicked={ this.loginButtonClicked }>Log in with Google</LoginButton>;
    } else {
      return (
        <div className="profile">

          <div className="info col-md-5">
            <p className="displayName"> { this.state.currentUser.displayName } </p>
            <p className="waiting">  Waiting on game to begin... </p>
            <LogoutButton logoutButtonClicked={ this.logoutButtonClicked }>Log out</LogoutButton>
          </div>
          <div className="loader col-md-2"><img src="./images/loading.gif"/></div>
          <div className="space col-md-5"></div>
          <Link to="/SanicSelect" activeClasseName="active">SanicSelect</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <section>
        <div className="App">
            { this.sessionButton() }
        </div>
      </section>
    );
  }
}

export default App;
