import React, { Component } from 'react';
import RacerOne from './RacerOne';
import RacerTwo from './RacerTwo';
import RacerThree from './RacerThree';
import RacerFour from './RacerFour';
import RacerFive from './RacerFive';
import RacerSix from './RacerSix';
import './Race.css';


class Race extends Component {
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




race1(){
  this.setState({
    sanic1: this.state.sanic1 + .5
  })
}

race2(){
  this.setState({
    sanic2: this.state.sanic2 + .5
  })
}

race3(){
  this.setState({
    sanic3: this.state.sanic3 + .5
  })
}

race4(){
  this.setState({
    sanic4: this.state.sanic4 + .5
  })
}

race5(){
  this.setState({
    sanic5: this.state.sanic5 + .5
  })
}

race6(){
  this.setState({
    sanic6: this.state.sanic6 + .5
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
<button onClick={this.race1.bind(this)}>sanic 1</button>
<button onClick={this.race2.bind(this)}>sanic 2</button>
<button onClick={this.race3.bind(this)}>sanic 3</button>
<button onClick={this.race4.bind(this)}>sanic 4</button>
<button onClick={this.race5.bind(this)}>sanic 5</button>
<button onClick={this.race6.bind(this)}>sanic 6</button>
</div>
</div>


                </div>
              </div>
            </div>
          </div>



    );
  }
}

export default Race;
