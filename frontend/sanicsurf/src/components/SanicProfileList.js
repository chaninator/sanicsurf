import React, {Component} from 'react';
import { Redirect} from 'react-router';
import SanicProfile from './SanicProfile';

class SanicProfileList extends Component {
  render(){
    return(
      <div>
      <p>Choose YOUR SANIC!!!</p>

      <SanicProfile/>
      


      </div>
    )
  }
}

export default SanicProfileList;
