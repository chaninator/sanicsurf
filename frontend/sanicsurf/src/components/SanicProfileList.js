import React, {Component} from 'react';
import { Redirect} from 'react-router';
import SanicProfile from './SanicProfile';
import './sanicprofilelist.css';

class SanicProfileList extends Component {


  render(){
    return(
      <div className="container">
        <div className="row character-select">

          {/* sanic character selection code - Andrew */}
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

          {/* sanic character selection in mobile view - Andrew */}

          <div class="sanic-select-mobile col-xs-12">
            <div class="row top-row">
              <div data-sanic="1" class="col-xs-6 sanic"><img src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt=""/></div>
              <div data-sanic="2" class="col-xs-6 sanic"><img src="http://i.imgur.com/ZFGYvlL.gif" alt=""/></div>
            </div>
            <div class="row mid-row">
              <div data-sanic="3" class="col-xs-6 sanic"><img src="http://i.imgur.com/Af4W6eJ.gif" alt=""/></div>
              <div data-sanic="4" class="col-xs-6 sanic"><img src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" alt=""/></div>
            </div>
            <div class="row bot-row">
              <div data-sanic="5" class="col-xs-6 sanic"><img src="http://i.imgur.com/xqAtBQn.gif" alt=""/></div>
              <div data-sanic="6" class="col-xs-6 sanic"><img src="http://i.imgur.com/tK6IrC9.gif" alt=""/></div>
            </div>
          </div>

          {/* selected sanic - additional info - Andrew */}

          <div class="sanic-display col-md-4">
            <div data-sanicinfo="1" class="sanic-hidden info1 active">
              <img class="sanic-profile" src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt=""/>
              <h2 class="sanic-name">Sanic Sanderson</h2>
              <p class="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="2" class="sanic-hidden info2">
              <img class="sanic-profile" src="http://i.imgur.com/ZFGYvlL.gif" alt=""/>
              <h2 class="sanic-name">Sanic Bronak</h2>
              <p class="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="3" class="sanic-hidden info3">
              <img class="sanic-profile" src="http://i.imgur.com/Af4W6eJ.gif" alt=""/>
              <h2 class="sanic-name">Sanak Singh</h2>
              <p class="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="4" class="sanic-hidden info4">
              <img class="sanic-profile" src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" alt=""/>
              <h2 class="sanic-name">Sanic on Speed</h2>
              <p class="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="5" class="sanic-hidden info5">
              <img class="sanic-profile" src="http://i.imgur.com/xqAtBQn.gif" alt=""/>
              <h2 class="sanic-name">Sanic Attack</h2>
              <p class="sanic-stats">Stats go here</p>
            </div>
            <div data-sanicinfo="6" class="sanic-hidden info6">
              <img class="sanic-profile" src="http://i.imgur.com/tK6IrC9.gif" alt=""/>
              <h2 class="sanic-name">Sanic at the Disco</h2>
              <p class="sanic-stats">Stats go here</p>
            </div>
          </div>

          <div class="modal animated bounceInUp bs-example-modal-sm" id="sanic-info1" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <img class="sanic-profile" src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt=""/>
                <h2 class="sanic-name">Sanic Sanderson</h2>
                <p class="sanic-stats">Stats go here</p>
                <button type="button" class="btn-go-slow">GO SLOW!</button>
                <button type="button" class="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div class="modal animated bounceInUp bs-example-modal-sm" id="sanic-info2" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <img class="sanic-profile" src="http://i.imgur.com/ZFGYvlL.gif" alt=""/>
                <h2 class="sanic-name">Sanic Bronak</h2>
                <p class="sanic-stats">Stats go here</p>
                <button type="button" class="btn-go-slow">GO SLOW!</button>
                <button type="button" class="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div class="modal animated bounceInUp bs-example-modal-sm" id="sanic-info3" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <img class="sanic-profile" src="http://i.imgur.com/Af4W6eJ.gif" alt=""/>
                <h2 class="sanic-name">Sanak Singh</h2>
                <p class="sanic-stats">Stats go here</p>
                <button type="button" class="btn-go-slow">GO SLOW!</button>
                <button type="button" class="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div class="modal animated bounceInUp bs-example-modal-sm" id="sanic-info4" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <img class="sanic-profile" src="http://orig14.deviantart.net/513f/f/2016/022/5/f/sanic_gif_by_bluegemfox-d9ovydu.gif" alt=""/>
                <h2 class="sanic-name">Sanic on Speed</h2>
                <p class="sanic-stats">Stats go here</p>
                <button type="button" class="btn-go-slow">GO SLOW!</button>
                <button type="button" class="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div class="modal animated bounceInUp bs-example-modal-sm" id="sanic-info5" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <img class="sanic-profile" src="http://i.imgur.com/xqAtBQn.gif" alt=""/>
                <h2 class="sanic-name">Sanic Attack</h2>
                <p class="sanic-stats">Stats go here</p>
                <button type="button" class="btn-go-slow">GO SLOW!</button>
                <button type="button" class="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

          <div class="modal animated bounceInUp bs-example-modal-sm" id="sanic-info6" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <img class="sanic-profile" src="http://i.imgur.com/tK6IrC9.gif" alt=""/>
                <h2 class="sanic-name">Sanic at the Disco</h2>
                <p class="sanic-stats">Stats go here</p>
                <button type="button" class="btn-go-slow">GO SLOW!</button>
                <button type="button" class="btn-go-fast">GO FAST!</button>
              </div>
            </div>
          </div>

        </div>
      </div>



    )
  }
}

export default SanicProfileList;
