import React, {Component} from 'react';
import SanicList from './SanicList';
import SanicProfile from './SanicProfile';
import './saniclist.css';

class SanicSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <div className="container">
                <div className="row character-select">
                  <SanicList/>
                </div>
              </div>
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
                  <SanicList/>
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
