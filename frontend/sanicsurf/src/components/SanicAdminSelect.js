import React, {Component} from 'react';
import SanicList from './SanicList';
import SanicProfile from './SanicProfile';
import axios from 'axios';
import './saniclist.css';

class SanicSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanics: []
    }
  }

  getSanics() {
    console.log('at least it fucking clicks')
    let self = this
    axios.get('http://localhost:3000/api/sanics').then(function(response) {
      console.log('the response: ', response.data.sanic);
      self.setState({sanics: response.data.sanic});
      console.log('SanicSelect State: ', self.state.sanics);
    }).catch(function(err) {
      console.log('a mother fucking error: ', err)
    })
  }

  componentDidMount() {
    this.getSanics();
    console.log('ssssssssanc', this.state)
  }

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="inner">
          <h4 className="sanic-title">CCBBSANIC</h4>
          <div className="container">
            <div className="row character-select">
              <SanicList allSanics={this.state.sanics}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <h1 className="sanic-title">CCBBSANIC</h1>
              <div className="container">
                <div className="row character-select">
                  <SanicList allSanics={this.state.sanics}/>
                  <SanicProfile/>
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
