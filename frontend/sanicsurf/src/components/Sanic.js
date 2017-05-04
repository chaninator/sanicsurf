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

    const sanicId = "/SanicRacer/"+this.props.sanic_id;

    console.log('Sanic loaded');
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (


        <div className="col-xs-6 sanic">
          <Link to='/SanicRacer'>
            <img src={this.props.url}/>
          </Link>
        </div>


      )
    } else {
      return (

        <div className="col-md-4 sanic" >
          <Link to='/SanicRacer'>
            <img src={this.props.url} />
          </Link>
        </div>
      )
    }
  }
}

export default Sanic;
