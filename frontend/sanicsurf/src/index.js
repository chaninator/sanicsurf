import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
//import { BrowserRouter } from 'react-router-dom'



import SanicSelect from './components/SanicSelect';
import SanicRacer from './components/SanicRacer';
import NotFound from './components/NotFound';
import Admin from './components/Admin';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
