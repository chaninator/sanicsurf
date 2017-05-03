import React, {Component} from 'react';
import {Redirect} from 'react-router';
import SanicProfile from './SanicProfile';
import Sanic from './Sanic';

class SanicList extends Component {



  componentDidMount() {
    console.log('loaded sonic profile list');
  }

  render() {


    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="sanic-select-mobile">
          <Sanic />
        </div>
      )
    } else {
      return (
        <div className="sanic-select col-md-8">
          <Sanic img={this.props.img}/>
        </div>
      )

    }
  }
}

export default SanicList;
