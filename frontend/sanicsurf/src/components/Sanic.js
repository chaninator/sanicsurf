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
      <a href={sanicId}>
        <div className="col-xs-6 sanic">
          <img src={this.props.url} />
        </div>
      </a>
      )
    } else {
      return (
        <div className="col-md-4 sanic" >
          <img src={this.props.url}/>
        </div>
      )
    }
  }
}

export default Sanic;
