import React, { Component } from 'react';

import './App.css';


class RacerFive extends Component {


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
        <img src="http://i.imgur.com/tK6IrC9.gif" />


          </div>



      </section>
    );
  }
}

export default RacerFive;
