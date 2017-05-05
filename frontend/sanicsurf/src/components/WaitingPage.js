import React, {Component} from 'react';
import LogoutButton from './LogoutButton';
import {Link} from 'react-router';
import './WaitingPage.css';

class WaitingPage extends Component {

  render() {
    console.log('I have arrived at the waiting page')

    const isMobile = window.innerWidth <= 500;
    if (isMobile) {

      return (
        <div className="background">
          <div className="profile">
            <div className="info col-md-5">
              <p className="displayName">
                Welcome {this.props.displayName}!
              </p>
              <p className="waiting">
                Waiting on game to begin...
              </p>
              <div className="logoutBtn">
                <LogoutButton logoutButtonClicked={this.props.logoutButtonClicked}>Log out</LogoutButton>
              </div>
            </div>
            <div className="loader col-md-2"><img src="./images/loading.gif" alt=""/></div>
          </div>
        </div>
      )
    } else {
      return (
        <section className="background">
          <div className="profile">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="info col-md-6">
                  <p className="displayName">
                    Welcome {this.props.displayName}!
                  </p>
                  <p className="waiting">
                    Waiting on game to begin...
                  </p>
                  <div className="loader"><img src="./images/loading.gif" alt=""/></div>
                  <div className="logoutBtn">
                    <LogoutButton logoutButtonClicked={this.props.logoutButtonClicked}>Log out</LogoutButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default WaitingPage;
