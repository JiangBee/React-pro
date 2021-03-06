import React from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
// import Home from '@/pages/Home';
import Kind from '@/pages/Kind';
import User from '@/pages/User';
import Back from '@/components/back/back.jsx';
class App extends React.Component {
  constructor (props) {
    super(props);
  }

  //验证登录

  render () {
    return (
      <div className="box">
        <header className="header">
          <Back props={this.props}></Back>
          <span className="iconfont icon-xuanxiang3"></span>
        </header>
        <Switch>
          <Route path="/kind" component = { Kind }></Route>
          <Route path="/user" component = { User }></Route>
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
