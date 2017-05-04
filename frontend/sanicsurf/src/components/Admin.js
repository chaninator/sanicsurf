import React, {Component} from 'react';
import {Link, Redirect} from 'react-router';
import './admin.css';

class Admin extends Component {

  startGame() {
    console.log('Starting Game');

  }

  render() {
    return (
      <section className="admin-content">
        <div className="container">
          <div className="row rings">
            <div className="col-md-4">
              <img src="https://media.giphy.com/media/HZzUOgwi1TdE4/giphy.gif"/>
            </div>
            <div className="col-md-4">
              <img src="https://media.giphy.com/media/HZzUOgwi1TdE4/giphy.gif"/>
            </div>
            <div className="col-md-4">
              <img src="https://media.giphy.com/media/HZzUOgwi1TdE4/giphy.gif"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 start">
              <Link to="/SanicAdminSelect" activeClassName="active" className="navlink">
                <a className="start-btn" onClick={()  => this.startGame()}>START</a>
              </Link>
            </div>
          </div>
          <div className="row rings">
            <div className="col-md-4">
              <img src="https://media.giphy.com/media/HZzUOgwi1TdE4/giphy.gif"/>
            </div>
            <div className="col-md-4">
              <img src="https://media.giphy.com/media/HZzUOgwi1TdE4/giphy.gif"/>
            </div>
            <div className="col-md-4">
              <img src="https://media.giphy.com/media/HZzUOgwi1TdE4/giphy.gif"/>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Admin;
