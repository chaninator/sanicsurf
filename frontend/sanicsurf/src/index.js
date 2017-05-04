import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import './index.css';

import SanicSelect from './components/SanicSelect';
import SanicRacer from './components/SanicRacer';
import NotFound from './components/NotFound';
import Admin from './components/Admin';

ReactDOM.render(
 (<Router history={browserHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={App}/>
    </Route>

    <Route path="/SanicSelect" component={SanicSelect}/>
    <Route path="/SanicRacer/:sanicId" component={ (props) => <SanicRacer {...props} /> } />
    <Route path="/Admin" component={Admin}/>
    <Route path="*" component={NotFound} />

 </Router>),

 document.getElementById('root')
);
