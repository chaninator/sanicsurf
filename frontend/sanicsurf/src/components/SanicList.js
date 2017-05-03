import React, {Component} from 'react';
import {Redirect} from 'react-router';
import SanicProfile from './SanicProfile';
import Sanic from './Sanic';

class SanicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanics: [
        {
          id: 0,
          url: 'http://www.briannedrouhard.com/images/sonicpoops.gif',
          name: 'Sanic Sanderson',
          stats: 'Speed'
        }, {
          id: 1,
          url: 'http://i.imgur.com/ZFGYvlL.gif',
          name: 'Sanic Bronak',
          stats: 'Brofessional'
        }, {
          id: 2,
          url: 'http://i.imgur.com/Af4W6eJ.gif',
          name: 'Sanak Singh',
          stats: 'AR/VR'
        }, {
          id: 3,
          url: 'http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif',
          name: 'Sanic on Speed',
          stats: 'Pills'
        }, {
          id: 4,
          url: 'http://i.imgur.com/xqAtBQn.gif',
          name: 'Sanic Attack',
          stats: 'Props'
        }, {
          id: 5,
          url: 'http://i.imgur.com/tK6IrC9.gif',
          name: 'Sanic at the Disco',
          stats: 'Beats'
        }
      ]
    }
  }

  componentDidMount() {
    console.log('loaded sonic profile list');
  }

  render() {

    const sanics = this.state.sanics.map((singleSanic) => {
      return <Sanic key={singleSanic.id} name={singleSanic.name} src={singleSanic.url}/>;
    });

    const sanicProfile = this.state.sanics.map((singleSanic) => {
      return <SanicProfile key={singleSanic.id} name={singleSanic.name} src={singleSanic.url} stats={singleSanic.stats}/>;
    });

    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="sanic-select-mobile">
          <div className="row">
            {sanics[0]}{sanics[1]}
          </div>
          <div className="row">
            {sanics[2]}{sanics[3]}
          </div>
          <div className="row">
            {sanics[4]}{sanics[5]}
          </div>
        </div>
      )
    } else {
      return (
        <div className="sanic-select col-md-8">
          <div className="row">
            {sanics[0]}{sanics[1]}{sanics[2]}
          </div>
          <div className="row">
            {sanics[3]}{sanics[4]}{sanics[5]}
          </div>
        </div>
      )

    }
  }
}

export default SanicList;
