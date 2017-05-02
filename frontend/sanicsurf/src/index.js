import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import SanicProfileList from './components/SanicProfileList';



ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="./components/SanicRacerList" component={SanicRacerList} />
  </Router>)
  document.getElementById('root')
);
