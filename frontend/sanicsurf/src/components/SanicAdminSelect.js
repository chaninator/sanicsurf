import React, {Component} from 'react';
import SanicList from './SanicList';
import SanicProfile from './SanicProfile';
import axios from 'axios';
import './sanicselect.css';

class SanicSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanics: []
    }
  }

  getSanics() {
    let self = this
    axios.get('http://localhost:3000/api/sanics').then(function(response) {
      console.log('the response: ', response.data.sanic);
      self.setState({sanics: response.data.sanic});
      console.log('SanicSelect State: ', self.state.sanics);
    }).catch(function(err) {
      console.log('a stupid error: ', err)
    })
  }

  componentDidMount() {
    this.getSanics();
    console.log('ssssssssanc', this.state)
    console.log('CUUREENT', this.props.currentSanic)
  }

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="inner">
          <div className="container">
            <div className="row">
              <div className="col-xs-1"></div>
              <div className="col-xs-10">
                <h4 className="sanic-title">SANIC LAND</h4>
              </div>
            </div>
            <div className="row character-select">
              <SanicList allSanics={this.state.sanics} changeSanic={this.props.changeSanic}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <h1 className="sanic-title">SANIC LAND</h1>
                </div>
              </div>
              <div className="row character-select">
                <div className="col-md-2"></div>
                <SanicList allSanics={this.state.sanics} changeSanic={this.props.changeSanic}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default SanicSelect;
