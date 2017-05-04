import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import './index.css';
import SanicSelect from './components/SanicSelect';
import SanicRacer from './components/SanicRacer';
import NotFound from './components/NotFound';
import Admin from './components/Admin';

ReactDOM.render(
 (<Router history={hashHistory}>


    <Route path="/" component={App}>
      <IndexRoute component={App}/>
    </Route>

    <Route path="SanicSelect" component={SanicSelect}/>
    <Route path="SanicRacer" component={SanicRacer}/>
    <Route path="Admin" component={Admin}/>
    <Route path="*" component={NotFound} />

 </Router>),

 document.getElementById('root')
);
