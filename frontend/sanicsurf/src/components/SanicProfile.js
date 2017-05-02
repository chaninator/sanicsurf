import React, {Component} from 'react';

class SanicProfile extends Component {
  pick(){
    console.log('PICKED THIS SANIC');

  }

  render(){
    return(
      <div>
          <h2>Sanic #1</h2>
          <p className='description'>OOOO BOI DAT BOI FAST</p>

          <button onClick={()=> this.props.addNum}>
            Pick Me
          </button>
      </div>
    )
  }
}

export default SanicProfile;
