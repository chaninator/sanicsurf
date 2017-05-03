import React, {Component} from 'react';
import './sanicracer.css';

class SanicRacer extends Component {

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      <div class="container">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-3 col-md-6 selected-sanic">
            <img class="sanic-profile" src="http://i.imgur.com/xqAtBQn.gif" alt="" />
            <h2 class="sanic-name">Sanic Attack</h2>
            <p class="sanic-stats">Stats go here</p>
            <a href="#" class="button button-3d-caution button-circle">GO!</a>
          </div>
        </div>
      </div>
    } else {

      return (

      )
    }
  }
}

export default SanicRacer;
