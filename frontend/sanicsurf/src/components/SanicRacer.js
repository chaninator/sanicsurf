import React, {Component} from 'react';
import axios from 'axios';
import '../../public/css/buttons.css';
//import axios from 'axios';
import './sanicracer.css';
//import { Link } from 'react-router-dom'

class SanicRacer extends Component {
  constructor(props){
    super(props);

    this.state = {
      //sanicId: this.props.params.sanicId,
      sanicUrl: '',
      sanicStats: '',
      sanicName: ''
    }
  }


  componentWillMount(){
    // var self = this;
    // axios.get('http://localhost:3000/api/'+this.state.sanicId).then(function(response) {
    //   console.log('the response: ', response.data);
    //   self.setState({
    //     sanicUrl: response.data.sanic[0].url,
    //     sanicStats: response.data.sanic[0].stats,
    //     sanicName: response.data.sanic[0].name
    //   });
    //   console.log('SanicRacer: ', this.state);
    // }).catch(function(err) {
    //   console.log('a stupid error: ', err)
    // })
    // //make a request to database for all sanic information
  }

  render() {
        console.log('im your fucking SANICRACER SUCCESS STORY')
        console.log('data: ', this.props)
    const isMobile = window.innerWidth <= 500;


    if (isMobile) {
      return(
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3 col-md-6 selected-sanic">
            <img className="sanic-profile" src={this.props.url} alt="" />
            <h2 className="sanic-name">{this.props.name}</h2>
            <p className="sanic-stats">{this.props.stats}</p>
            <a className="button button-3d-primary button-circle">GO!</a>
          </div>
        </div>
      </div>
    )
    }
  else {
      return(
        <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3 col-md-6 selected-sanic">
            <img className="sanic-profile" src={this.props.url} alt="" />
            <h2 className="sanic-name">{this.props.name}</h2>
            <p className="sanic-stats">{this.props.stats}</p>
            <a className="button button-3d-primary button-circle">GO!</a>
          </div>
        </div>
      </div>
    )
    }
  }
}

export default SanicRacer;
