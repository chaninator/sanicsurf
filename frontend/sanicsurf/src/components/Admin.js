import React, {Component} from 'react';
import {Link, Redirect } from 'react-router';


class Admin extends Component {

  startGame(){
    console.log('Starting Game');

  }

  render(){
    return(
      <div>
          <h2>AdMAN</h2>
          <p className='description'>U DA AD MAN</p>
          <button onClick={()=> this.startGame()}><li><Link to="/SanicAdminSelect" activeClassName="active" className="navlink">Start</Link></li></button>

      </div>
    )
  }
}

export default Admin;
