import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './layout/App';
import HomeApp from './layout/HomeApp.jsx';
import UserApp from '@/layout/UserApp';
import DetailApp from '@/layout/DetailApp';
import CartApp from '@/layout/CartApp.jsx';
import OrderApp from '@/layout/OrderFromApp.jsx';
import LoginApp from '@/layout/LoginApp.jsx';
import RegisterApp from '@/layout/RegisterApp.jsx';
import SearchApp from '@/layout/SearchApp.jsx';
import DivisionApp from './layout/DivisionApp';
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';
import './main.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/division" component = { DivisionApp } />
      <Route path="/userapp/register" component = { RegisterApp }></Route>
      <Route path="/userapp/login" component = { LoginApp }></Route>
      <Route path="/order" component = {OrderApp}></Route>
      <Route path="/home" component = { HomeApp }></Route>
      <Route path="/cart" component = { CartApp }></Route>
      <Route path="/detail" component = { DetailApp } />
      <Route path="/search" component = { SearchApp } />
      <Route path="/userapp" component = { UserApp} />
      <Route path="/" component = { App } />
    </Switch>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
