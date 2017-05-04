import React, {Component} from 'react';
//import {Redirect} from 'react-router';
//import SanicProfile from './SanicProfile';
import Sanic from './Sanic';

class SanicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSanic: 'sanic'
    }
}


updateSanic0(){
  this.setState({
    chosenSanic: this.props.allSanics[0]
  })
  console.log('chosen sanic', this.state.chosenSanic)
}

updateSanic1(){
  this.setState({
    chosenSanic: this.props.allSanics[1]
  })
  console.log('chosen sanic', this.state.chosenSanic)
}

updateSanic2(){
  this.setState({
    chosenSanic: this.props.allSanics[2]
  })
  console.log('chosen sanic', this.state.chosenSanic)
}

updateSanic3(){
  this.setState({
    chosenSanic: this.props.allSanics[3]
  })
  console.log('chosen sanic', this.state.chosenSanic)
}

updateSanic4(){
  this.setState({
    chosenSanic: this.props.allSanics[4]
  })
  console.log('chosen sanic', this.state.chosenSanic)
}

updateSanic5(){
  this.setState({
    chosenSanic: this.props.allSanics[5]
  })
  console.log('chosen sanic', this.state.chosenSanic)
}

changeSanic(){
  this.props.changeSanic(this.state.chosenSanic)
}

componentWillMount() {
  console.log('all sanics:', this.props.allSanics)
}
  render() {
    console.log('SanicList loaded');
    const sanics = this.props.allSanics.map((sanic) => {
    return <Sanic key={sanic.sanic_id} {...sanic}/>;
    });
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="sanic-select-mobile">
          <div className="row">
            {sanics[0]}{sanics[1]}
          </div>
          <div className="row">
            {sanics[2]}{sanics[3]}
          </div>
          <div className="row">
            {sanics[4]}{sanics[5]}
          </div>
        </div>
      )
    } else {
      return (
        <div className="sanic-select col-md-8">
          <div className="row">

            <div className="col-md-4 sanic" onClick={this.updateSanic0.bind(this)}>{sanics[0]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic1.bind(this)}>{sanics[1]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic2.bind(this)}>{sanics[2]}</div>
          </div>
          <div className="row">

            <div className="col-md-4 sanic" onClick={this.updateSanic3.bind(this)}>{sanics[3]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic4.bind(this)}>{sanics[4]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic5.bind(this)}>{sanics[5]}</div>
          </div>
          <button onClick={this.changeSanic.bind(this)}>Play</button>
        </div>
      )

    }
  }
}

export default SanicList;
