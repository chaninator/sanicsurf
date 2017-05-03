import React, {Component} from 'react';
import './sanicracer.css';



class SanicRacer extends Component {

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return(
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3 col-md-6 selected-sanic">
            <img className="sanic-profile" src="http://i.imgur.com/xqAtBQn.gif" alt="" />
            <h2 className="sanic-name">Sanic Attack</h2>
            <p className="sanic-stats">Stats go here</p>
            <a className="button button-3d-caution button-circle">GO!</a>
          </div>
        </div>
      </div>
    )
    }
  else {

    }
  }
}

export default SanicRacer;
