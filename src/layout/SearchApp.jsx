import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import Search from '@/pages/Search';
import Brand from '@/pages/Brand.jsx';
class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="box">
        <Switch>
          <Route path="/search/brand/:id" component = { Brand }></Route>
          <Route path="/search" component = { Search }></Route>

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
