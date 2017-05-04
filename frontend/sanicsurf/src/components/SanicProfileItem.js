import React, {Component} from 'react';

class SanicProfileItem extends Component {

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {

    } else {

      return (
        <div className="sanic-display col-md-4">
          <img className="sanic-profile" src={this.props.currentSanic.src}/>
          <h2 className="sanic-name">{this.props.currentSanic.name}</h2>
          <p className="sanic-stats">{this.props.currentSanic.stats}</p>
        </div>
      )
    }
  }
}

export default SanicProfileItem;
