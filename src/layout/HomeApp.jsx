import React from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import Home from '@/pages/Home';

class App extends React.Component {
  render () {
    return (
      <div className="box">
        {/*<header className="header">header</header>*/}
        <Switch>
          <Route path="/home" component = { Home }></Route>
          <Redirect path="/" to="/home"></Redirect>
        </Switch>
        <footer className="footer">
          <ul>
            <NavLink to="/home">
              <span className="fa fa-home fa-lg"></span>
              首页
            </NavLink>
            <NavLink to="/kind">
              <span className="fa fa-align-justify "></span>
              分类
            </NavLink>
            <NavLink to="/search">
              <span className="fa fa-search fa-lg"></span>
              搜索
            </NavLink>
            <NavLink to="/cart">
              <span className="fa fa-shopping-cart fa-lg"></span>
              购物车
            </NavLink>
            <NavLink to="/user">
              <span className="fa fa-user-o fa-lg"></span>
              我的
            </NavLink>
          </ul>
        </footer>
      </div>
    )
  }
}

export default App
