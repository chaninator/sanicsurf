import React, {Component} from 'react';
import SanicProfile from './SanicProfile';

class SanicProfileList extends Component {
  render(){
    return(
      <div>
      <p>Choose YOUR SANIC!!!</p>

      <SanicProfile/>
      <SanicProfile/>


      </div>
    )
  }
}

export default SanicProfileList;
