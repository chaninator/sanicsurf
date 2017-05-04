import React, {Component} from 'react';
//import {Redirect} from 'react-router';
//import SanicProfile from './SanicProfile';
import Sanic from './Sanic';


class SanicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSanic: null
    }
}


  updateSanic(chosenSanic){
    this.setState({
      chosenSanic: chosenSanic
    }, () => this.props.changeSanic(chosenSanic))

  }

  changeSanic () {
    this.props.changeSanic(this.state.chosenSanic)
  }

  componentDidUpdate(prevState) {
  // only update chart if the data has changed
  if (prevState.chosenSanic !== this.state.chosenSanic) {
    console.log('state of SanicList chosenSanic', this.state.chosenSanic)
    }
  }



  componentWillMount() {
    //console.log('all sanics:', this.props.allSanics)
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

            <div className="col-xs-6 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[0])}>{sanics[0]}</div>

            <div className="col-xs-6 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[1])}>{sanics[1]}</div>

            <div className="col-xs-6 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[2])}>{sanics[2]}</div>
          </div>
          <div className="row">

            <div className="col-xs-6 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[3])}>{sanics[3]}</div>

            <div className="col-xs-6 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[4])}>{sanics[4]}</div>

            <div className="col-xs-6 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[5])}>{sanics[5]}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="sanic-select col-md-8">
          <div className="row">

            <div className="col-md-4 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[0])}>{sanics[0]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[1])}>{sanics[1]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[2])}>{sanics[2]}</div>
          </div>
          <div className="row">

            <div className="col-md-4 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[3])}>{sanics[3]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[4])}>{sanics[4]}</div>

            <div className="col-md-4 sanic" onClick={this.updateSanic.bind(this, this.props.allSanics[5])}>{sanics[5]}</div>
          </div>
        </div>
      )

    }
  }
}

export default SanicList;
