import React, {Component} from 'react';
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';

class Sanic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanicRacer: false
    }
  }

  // handleClick() {
  //
  //
  // }

  render() {
    const sanicId = "/SanicRacer/"+this.props.sanic_id;

    console.log('Sanic loaded');
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (

          <img src={this.props.url} />
        
      )
    } else {
      return (
      <a>
          <img src={this.props.url}/>
      </a>
      )
    }
  }
}

export default Sanic;
