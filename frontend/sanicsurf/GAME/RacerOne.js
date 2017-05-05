import React, { Component } from 'react';

import './App.css';


class RacerOne extends Component {

  render() {
let style = {
        width: 1 + this.props.position  + '%',
        height: '30px'
    };
    return (

      <section>

      <div className="race">
        <div className="bitch" style={style} >
          </div>

          <img src="http://www.briannedrouhard.com/images/sonicpoops.gif"/>

        {/*<div className="sanic"></div>*/}


          </div>


      </section>
    );
  }
}

export default RacerOne;
