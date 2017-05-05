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
          <div className="space col-md-5"></div>
        </div>
      </div>
      )
    } else {
      return (
        <div className="background">
          <div className="profile">
            <div className="info col-md-5">
              <p className="displayName">
                {this.props.displayName}
              </p>
              <p className="waiting">
                Waiting on game to begin...
              </p>
              <LogoutButton logoutButtonClicked={this.props.logoutButtonClicked}>Log out</LogoutButton>
            </div>
            <div className="loader col-md-2"><img src="./images/loading.gif" alt=""/></div>
            <div className="space col-md-5"></div>
            {/*<Link to="/SanicProfileList" activeClasseName="active">SanicProfileList</Link>*/}
          </div>
        </div>
      )
    }
  }
}

export default WaitingPage;

//          {/*<Link to="/SanicProfileList" activeClasseName="active">SanicProfileList</Link>*/}
