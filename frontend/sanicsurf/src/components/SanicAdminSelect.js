import React, { Component } from 'react';
import RacerOne from './RacerOne';
import RacerTwo from './RacerTwo';
import RacerThree from './RacerThree';
import RacerFour from './RacerFour';
import RacerFive from './RacerFive';
import RacerSix from './RacerSix';
import './Race.css';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');
console.log('SOCKET:', socket)

class SanicAdminSelect extends Component {
  constructor(){
    super();
    this.state = {
      sanic1: 0,
      sanic2: 0,
      sanic3: 0,
      sanic4: 0,
      sanic5: 0,
      sanic6: 0
    }
  }

componentDidUpdate() {
  if (this.state.sanic1 === 92) {
    alert('Sanic Sanderson wins!');
  } else if (this.state.sanic2 === 92) {
    alert('Sanic Bronak wins!');
  } else if (this.state.sanic3 === 92) {
    alert('Sanak Singh wins!');
  } else if (this.state.sanic4 === 92) {
    alert('Sanic Speed wins!');
  } else if (this.state.sanic5 === 92) {
    alert('Sanic at the Disco wins!');
  } else if (this.state.sanic6 === 92) {
    alert('Sanic Attack wins!');
  }
}

componentWillMount() {
  var self = this
  socket.on('person-voted', function (vote) {
    console.log('SANIC WILL MOVE!', vote)

    {/*self.setState({start: true})*/}
  })
  socket.on('move-sanic', function(data){
    console.log('data to be moved:', data)
    if(data==0){
      self.setState({
        sanic1: self.state.sanic1 + 2
      })
    } else if(data==1){
      self.setState({
        sanic2: self.state.sanic2 + 2
      })
    } else if(data==2){
      self.setState({
        sanic3: self.state.sanic3 + 2
      })
    } else if(data==3){
      self.setState({
        sanic4: self.state.sanic4 + 2
      })
    } else if(data==4){
      self.setState({
        sanic6: self.state.sanic6 + 2
      })
    } else if(data==5){
      self.setState({
        sanic5: self.state.sanic5 + 2
      })
    }
  })
}

  render() {
    return (

      <div className="container">
            <div className="row">
              <div className="level-container cold-md-12">

<div id="bg-scroll">
<div>

<RacerOne position={this.state.sanic1}/>
<div></div>
<RacerTwo position={this.state.sanic2}/>
<div></div>
<RacerThree position={this.state.sanic3}/>
<div></div>
<RacerFour position={this.state.sanic4}/>
<div></div>
<RacerFive position={this.state.sanic5}/>
<div></div>
<RacerSix position={this.state.sanic6}/>
<div className="buttonblock">

</div>
</div>


                </div>
              </div>
            </div>
          </div>



    );
  }
}

export default SanicAdminSelect;
