import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Clothing from '@/pages/Clothing';
import Luxury from '@/pages/Luxury';
import Cosmetics from '@/pages/Cosmetics';
import Back from '@/components/back/back.jsx';

class Com extends Component {
  render () {
    return (
      <div className = "box">
        <header className = "header">
          <Back props={this.props}></Back>
          <span>品牌专区</span>
          <span className="iconfont icon-xuanxiang3"></span>
        </header>
        <div className = "content">
        <Switch>
            <Route path="/division/luxury" component = { Luxury }></Route>
            <Route path="/division/cosmetics" component = { Cosmetics }></Route>
            <Route path="/division/clothing" component = { Clothing }></Route>
          </Switch>
        </div>
      </div>
      )
  }
}

export default Com
