import React, {Component} from 'react';

class SanicProfileItem extends Component {

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {

    } else {

      return (
        <div className="sanic-display col-md-4">
          HELLO
          <img className="sanic-profile" src={this.props.src}/>
          <h2 className="sanic-name">{this.props.name}</h2>
          <p className="sanic-stats">{this.props.stats}</p>
        </div>
      )
    }
  }
}

export default SanicProfileItem;
