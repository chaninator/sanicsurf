import React, {Component} from 'react';

class Admin extends Component {

  startGame(){
    console.log('Starting Game')
  }

  render(){
    return(
      <div>
          <h2>AdMAN</h2>
          <p className='description'>U DA ADMIN</p>
          <button onClick={()=> this.startGame()}>Start</button>

      </div>
    )
  }
}

export default Admin;
