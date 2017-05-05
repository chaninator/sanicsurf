import React, { Component } from 'react';

import './App.css';


class RacerTwo extends Component {

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

        <img src="http://i.imgur.com/ZFGYvlL.gif"/>


          </div>



      </section>
    );
  }
}

export default RacerTwo;
