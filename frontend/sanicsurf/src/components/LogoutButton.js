import React, { Component } from 'react';
import './loginbutton.css';

class LogoutButton extends Component {
  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="btn-container">
          <a onClick={this.props.logoutButtonClicked} className="login-btn">{this.props.children}
          </a>
        </div>
      )
    } else {
      return (
        <div className="butn-container">
          <a onClick={this.props.logoutButtonClicked} className="login-btn">{this.props.children}
          </a>
        </div>
      )
    }
  }
}

export default LogoutButton;
