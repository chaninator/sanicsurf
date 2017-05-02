import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SanicProfileList from './components/SanicProfileList';




class App extends Component {

  addNum(){
    this.setState={

    }
  }

  constructor(props){
  super(props);
  this.state = {
    query: '',
    artist: 'WEEKND',
    vote: 0
  }



}

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Login/>

        <SanicProfileList addNum={this.addNum()}/>



        <ul className="header">
      
        <li><Link to="/SanicProfileList" activeClassName="active" className="navlink">SanicProfileList</Link></li>
      </ul>
      <div className="content">
        {this.props.children}
      </div>

      </div>
    );
  }
}

export default App;
