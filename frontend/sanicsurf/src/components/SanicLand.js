import React, { Component } from 'react';
import { Link, IndexLink, ReactRouter } from 'react-router';
import { firebase, auth } from '../utils/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import App from '../App';
import SanicSelect from '../components/SanicSelect';
import WaitingPage from '../components/WaitingPage';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import SanicRacer from '../components/SanicRacer';
import Admin from '../components/Admin'
import SanicAdminSelect from '../components/SanicAdminSelect'


class SanicLand extends Component {
  constructor(props) {
    super(props)
  }

  render() {
     return(
        <Router>
          <div>
            {this.props.children}
            <Route exact path="/" component={ ()=> <App { ...this.props }/> } />
            <Route path="/admin" component={ Admin }/>
            <Route path="/SanicAdminSelect" component={ SanicAdminSelect } />
          </div>
      </Router>
      )
  }

}

export default SanicLand

// {this.sessionButton()}
