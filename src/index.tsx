import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard, Home, SignIn} from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
    <Router>
      <Switch>
        
        <Route exact path='/'>
          <Home title={'The Car Collection'}/>
        </Route>

        <Route path='/dashboard' component={Dashboard}/>

        <Route path='/signin' component={SignIn}/>

      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
