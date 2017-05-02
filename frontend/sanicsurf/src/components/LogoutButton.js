import React, { Component } from 'react';

class LogoutButton extends Component {
  render() {
    return (
      <button onClick={ this.props.logoutButtonClicked }
        className="btn-login btn btn-primary">{ this.props.children }
      </button>
    )
  }
}

export default LogoutButton;
