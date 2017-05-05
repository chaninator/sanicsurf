import React, {Component} from 'react';
import './loginbutton.css';

class LoginButton extends Component {
  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="mobile-btn-container">
        <div className="butn-container">
          <a onClick={this.props.loginButtonClicked} className="login-btn">{this.props.children}
          </a>
        </div>
      </div>
      )
    } else {
      return (
          <div className="butn-container">
            <a onClick={this.props.loginButtonClicked} className="login-btn">{this.props.children}
            </a>
          </div>
      )
    }
  }
}

export default LoginButton;
