import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import logo from './logo.svg';
import './App.css';




class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Sanic-Surf</h2>
        </div>

        <ul className="header">
      <li><Link to="/SanicRacerList" activeClasseName="active">SanicRacerList</Link></li>
      <li><Link to="/SanicProfileList" activeClasseName="active">SanicProfileList</Link></li>
      </ul>


      </div>
    );
  }
}

export default App;
