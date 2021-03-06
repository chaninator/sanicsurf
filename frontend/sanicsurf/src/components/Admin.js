import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './admin.css';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

class Admin extends Component {

  startGame() {
    socket.emit('start-game')
  }

  componentWillMount () {
    var self = this
    socket.emit('hello')
    socket.on('start', function () {
      self.setState({start: true})
    })
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
            <div className="col-md-12 start" activeClassName="active" className="navlink">
              <Link to="/SanicAdminSelect" >
                <a className="start-btn" onClick={()  => this.startGame()}>
                  I AM THE GOD DAMN START BUTTON
                </a>
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

// activeClassName="active" className="navlink"
//        <a className="start-btn" onClick={()  => this.startGame()}>START</a>
