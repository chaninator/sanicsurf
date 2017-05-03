import React, { Component } from 'react';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { Link, IndexLink, ReactRouter } from 'react-router';
import { firebase, auth } from './utils/firebase';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SanicSelect from './components/SanicSelect';
import WaitingPage from './components/WaitingPage';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');
console.log('SOCKET:', socket)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      start: true
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser)
        this.setState({ currentUser })
      } else {
        this.setState({ currentUser: null })
      }
    })

    var self = this
    socket.emit('hello')
    socket.on('start', function () {
      self.setState({start: true})
    })
  }

  loginButtonClicked (e) {
    e.preventDefault();

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked (e) {
    e.preventDefault()
    auth.signOut()
  }

  componentDidUpdate(prevState) {
  // only update chart if the data has changed
  if (prevState.start !== this.state.start) {
    this.sessionButton()
    }
  }

  sessionButton () {
    if (this.state.currentUser && this.state.start) {
      return <SanicSelect img={this.handleResponse}/>
    } else if (this.state.currentUser) {
      return <WaitingPage displayName={this.state.currentUser.displayName} logoutButtonClicked={this.logoutButtonClicked}/>
    } else {
      return <LoginButton loginButtonClicked={ this.loginButtonClicked }>Log in with Google</LoginButton>;
    }
  }

  render() {
    return (
      <section>
        {this.sessionButton()}
        
      </section>
    )
  }
}


export default App
