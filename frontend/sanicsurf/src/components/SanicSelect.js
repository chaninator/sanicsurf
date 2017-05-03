import React, {Component} from 'react';
import SanicList from './SanicList';
import SanicProfile from './SanicProfile';
import './saniclist.css';

class SanicSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanics: ''
    }
  }

  getSanic(){
    console.log('this state is', this.state);
    const BASE_URL = 'https://localhost:3000';
    const FETCH_URL = BASE_URL;
    console.log('FETCH_URL',FETCH_URL);
    fetch(FETCH_URL,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(json =>{
         const sanics = json.sanics;
         console.log('Sanics', sanics);
         this.setState({sanics});
       });
  }

  componentWillMount(){
    
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
                  <button onClick={()=> this.getSanic()}/>
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
