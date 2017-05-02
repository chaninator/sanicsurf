import React, {Component} from 'react';
import { Redirect} from 'react-router';
import SanicProfile from './SanicProfile';
import { Link, IndexLink } from 'react-router';
import './SanicProfileList.css';

class SanicProfileList extends Component {
  render(){
    return(
      <div>
      <p>Choose YOUR SANIC!!!</p>
      <h1 className="sanic-title">CCSANIC</h1>
      <div className="container">
        <div className="row character-select">


          <div className="sanic-select col-md-8">
            <div className="row top-row">
              <div data-sanic="1" className="col-md-4 sanic"><img src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt=""/></div>
              <div data-sanic="2" className="col-md-4 sanic"><img src="http://i.imgur.com/ZFGYvlL.gif" alt=""/></div>
              <div data-sanic="3" className="col-md-4 sanic"><img src="http://i.imgur.com/Af4W6eJ.gif" alt=""/></div>
            </div>
            <div className="row bot-row">
              <div data-sanic="4" className="col-md-4 sanic"><img src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" alt=""/></div>
              <div data-sanic="5" className="col-md-4 sanic"><img src="http://i.imgur.com/xqAtBQn.gif" alt=""/></div>
              <div data-sanic="6" className="col-md-4 sanic"><img src="http://i.imgur.com/tK6IrC9.gif" alt=""/></div>
            </div>
          </div>


          <div className="sanic-select-mobile col-xs-12">
            <div className="row top-row">
              <div data-sanic="1" className="col-xs-6 sanic"><img src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt=""/></div>
              <div data-sanic="2" className="col-xs-6 sanic"><img src="http://i.imgur.com/ZFGYvlL.gif" alt=""/></div>
            </div>
            <div className="row mid-row">
              <div data-sanic="3" className="col-xs-6 sanic"><img src="http://i.imgur.com/Af4W6eJ.gif" alt=""/></div>
              <div data-sanic="4" className="col-xs-6 sanic"><img src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" alt=""/></div>
            </div>
            <div className="row bot-row">
              <div data-sanic="5" className="col-xs-6 sanic"><img src="http://i.imgur.com/xqAtBQn.gif" alt=""/></div>
              <div data-sanic="6" className="col-xs-6 sanic"><img src="http://i.imgur.com/tK6IrC9.gif" alt=""/></div>
            </div>
          </div>


          <div className="sanic-display col-md-4">
            <div data-sanicinfo="1" className="sanic-hidden info1 active">
              <img className="sanic-profile" src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt=""/>
              <h2 className="sanic-name">Sanic Sanderson</h2>
              <p className="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="2" className="sanic-hidden info2">
              <img className="sanic-profile" src="http://i.imgur.com/ZFGYvlL.gif" alt=""/>
              <h2 className="sanic-name">Sanic Bronak</h2>
              <p className="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="3" className="sanic-hidden info3">
              <img className="sanic-profile" src="http://i.imgur.com/Af4W6eJ.gif" alt=""/>
              <h2 className="sanic-name">Sanak Singh</h2>
              <p className="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="4" className="sanic-hidden info4">
              <img className="sanic-profile" src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" alt=""/>
              <h2 className="sanic-name">Sanic on Speed</h2>
              <p className="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="5" className="sanic-hidden info5">
              <img className="sanic-profile" src="http://i.imgur.com/xqAtBQn.gif" alt=""/>
              <h2 className="sanic-name">Sanic Attack</h2>
              <p className="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="6" className="sanic-hidden info6">
              <img className="sanic-profile" src="http://i.imgur.com/tK6IrC9.gif" alt=""/>
              <h2 className="sanic-name">Sanic at the Disco</h2>
              <p className="sanic-stats">Stats go here</p>
            </div>
          </div>

          <div className="modal animated bounceInUp bs-example-modal-sm" id="sanic-info1" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <img className="sanic-profile" src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt=""/>
                <h2 className="sanic-name">Sanic Sanderson</h2>
                <p className="sanic-stats">Stats go here</p>
                <button type="button" className="btn-go-slow">GO SLOW!</button>
                <button type="button" className="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div className="modal animated bounceInUp bs-example-modal-sm" id="sanic-info2" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <img className="sanic-profile" src="http://i.imgur.com/ZFGYvlL.gif" alt=""/>
                <h2 className="sanic-name">Sanic Bronak</h2>
                <p className="sanic-stats">Stats go here</p>
                <button type="button" className="btn-go-slow">GO SLOW!</button>
                <button type="button" className="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div className="modal animated bounceInUp bs-example-modal-sm" id="sanic-info3" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <img className="sanic-profile" src="http://i.imgur.com/Af4W6eJ.gif" alt=""/>
                <h2 className="sanic-name">Sanak Singh</h2>
                <p className="sanic-stats">Stats go here</p>
                <button type="button" className="btn-go-slow">GO SLOW!</button>
                <button type="button" className="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div className="modal animated bounceInUp bs-example-modal-sm" id="sanic-info4" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <img className="sanic-profile" src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" alt=""/>
                <h2 className="sanic-name">Sanic on Speed</h2>
                <p className="sanic-stats">Stats go here</p>
                <button type="button" className="btn-go-slow">GO SLOW!</button>
                <button type="button" className="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div className="modal animated bounceInUp bs-example-modal-sm" id="sanic-info5" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <img className="sanic-profile" src="http://i.imgur.com/xqAtBQn.gif" alt=""/>
                <h2 className="sanic-name">Sanic Attack</h2>
                <p className="sanic-stats">Stats go here</p>
                <button type="button" className="btn-go-slow">GO SLOW!</button>
                <button type="button" className="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div className="modal animated bounceInUp bs-example-modal-sm" id="sanic-info6" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <img className="sanic-profile" src="http://i.imgur.com/tK6IrC9.gif" alt=""/>
                <h2 className="sanic-name">Sanic at the Disco</h2>
                <p className="sanic-stats">Stats go here</p>
                <button type="button" className="btn-go-slow">GO SLOW!</button>
                <button type="button" className="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

        </div>
      </div>


      <Link to="/SanicRacerList" activeClasseName="active">SanicRace</Link>


      </div>
    )
  }
}

export default SanicProfileList;
