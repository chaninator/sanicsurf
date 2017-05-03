import React, {Component} from 'react';

class Sanic extends Component {



  

  render() {
    console.log('Sanic loaded');
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="col-xs-6 sanic">
          <img src ={this.props.src}/>
        </div>
      )
    } else {
      return (
        <div className="col-md-4 sanic" }>
          <img src ={this.props.src}/>
        </div>
      )
    }
  }
}

export default Sanic;
