import React, {Component} from 'react';

class Sanic extends Component {



  handleClick() {
    console.log('HANDLE ME IN THE FACE');

  }

  render() {
    console.log('Sanic loaded');
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="col-xs-6 sanic">
          <img src={this.props.imageUrl} />
        </div>
      )
    } else {
      return (
        <div className="col-md-4 sanic" onClick={this.handleClick}>
          <img src={this.props.imageUrl} />
        </div>
      )
    }
  }
}

export default Sanic;
