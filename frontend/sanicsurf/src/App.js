import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import SanicProfileList from './components/SanicProfileList';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { firebase, auth } from './utils/firebase';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      vote: 0
    }
  }

  addNum(){
    this.setState={

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
        <div>
        <div className="profile">

          <div className="info col-md-5">
            <p className="displayName"> { this.state.currentUser.displayName } </p>
            <p className="waiting">  Waiting on game to begin... </p>
            <LogoutButton logoutButtonClicked={ this.logoutButtonClicked }>Log out</LogoutButton>
          </div>
          <div className="loader col-md-2"><img src="./images/loading.gif"/></div>
          <div className="space col-md-5"></div>

        </div>

        <br />

          <SanicProfileList addNum={this.addNum()}/>

        <ul className="header">
      <li><Link to="/SanicRacerList" activeClasseName="active">SanicRacerList</Link></li>
      <li><Link to="/SanicProfileList" activeClasseName="active">SanicProfileList</Link></li>
      </ul>
        <div className="content">
          {this.props.children}
        </div>

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
