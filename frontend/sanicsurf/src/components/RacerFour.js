import React, { Component } from 'react';

import './Race.css';


class RacerFour extends Component {

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
        <img src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" />

          </div>




      </section>
    );
  }
}

export default RacerFour;
