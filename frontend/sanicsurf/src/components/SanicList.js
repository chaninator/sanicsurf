import React, {Component} from 'react';
//import {Redirect} from 'react-router';
//import SanicProfile from './SanicProfile';
import Sanic from './Sanic';


class SanicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanics: this.props.allSanics
    }
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
            {sanics[0]}{sanics[1]}{sanics[2]}
          </div>
          <div className="row">
            {sanics[3]}{sanics[4]}{sanics[5]}
          </div>
        </div>
      )

    }
  }
}

export default SanicList;
