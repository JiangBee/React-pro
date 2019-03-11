import React, { Component } from 'react'
import './Header.scss';

class Header extends Component {

  render () {
    return (
      <header className = "header">
        <i className="iconfont icon-xuanxiang3" style={{ color:"#fff"}}></i>
        <div className="logo">
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <i className="iconfont icon-search" style={{ color:"#fff"}}></i>
      </header>
    )
  }
}

export default Header
