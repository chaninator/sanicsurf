import React, {Component} from 'react';
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
    // const isMobile = window.innerWidth <= 500;
    return  (<div>CCBBS
      {this.props.chosenSanic}
      </div>)

  //   if (isMobile) {
  //     return(
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-sm-3"></div>
  //         <div className="col-sm-3 col-md-6 selected-sanic">
  //           <img className="sanic-profile" src={this.state.sanicUrl} alt="" />
  //           <h2 className="sanic-name">{this.state.sanicName}test</h2>
  //           <p className="sanic-stats">{this.state.sanicStats}</p>
  //           <a className="button button-3d-primary button-circle">GO!</a>
  //         </div>
  //       </div>
  //     </div>
  //   )
  //   }
  // else {
  //     return(
  //       <div>CCBBS</div>)
  //   }
  }
}

export default SanicRacer;
