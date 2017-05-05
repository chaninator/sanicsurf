import React, {Component} from 'react';
//import {Redirect} from 'react-router';

class Sanic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanicRacer: false,
      sanic: null
    }
  }

  render() {

    // const sanicId = "/SanicRacer/"+this.props.sanic_id;

    console.log('Sanic loaded');

    return (<img src={this.props.url}/>)
  }
}

export default Sanic;
