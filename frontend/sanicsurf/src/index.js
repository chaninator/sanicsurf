import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import './index.css';
import SanicProfileList from './components/SanicProfileList';
import SanicRacerList from './components/SanicRacerList';
import NotFound from './components/NotFound';
import Admin from './components/Admin';




ReactDOM.render(
 (<Router history={hashHistory}>



    <Route path="/" component={App}>
      <IndexRoute component={App}/>
    </Route>
    <Route path="SanicRacerList" component={SanicRacerList}/>
    <Route path="SanicProfileList" component={SanicProfileList}/>
    <Route path="Admin" component={Admin}/>
    <Route path="*" component={NotFound} />

 </Router>),

 document.getElementById('root')
);
