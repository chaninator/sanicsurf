import React, { Component } from 'react';

import './Race.css';


class RacerThree extends Component {


  render() {
let style = {
        width: 1 + this.props.position + '%',
        height: '30px'
    };
    return (

      <section>

      <div className="race">
        <div className="bitch" style={style}>
          </div>
          <img className="racer" src="http://i.imgur.com/Af4W6eJ.gif"/>

        {/*}<div className="sanic"></div>*/}


          </div>


      </section>
    );
  }
}

export default RacerThree;
