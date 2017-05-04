import React, {Component} from 'react';
//import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';

class Sanic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanicRacer: false,
      sanic: null
    }
  }

  render () {
    console.log('Sanic loaded');
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
            <img src={this.props.url}/>
      )
    } else {
      return (
            <img src={this.props.url} />
      )
    }
  }
}

export default Sanic;
