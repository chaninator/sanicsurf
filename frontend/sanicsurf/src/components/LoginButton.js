import React, { Component } from 'react';
import './LoginButton.css'

class LoginButton extends Component {
  render() {
    return (
    <div className="login-background">
      <button className="sanic-login" onClick={ this.props.loginButtonClicked }
        className="btn-login btn btn-primary">{ this.props.children }
      </button>
    </div>
    )
  }
}

export default LoginButton;
