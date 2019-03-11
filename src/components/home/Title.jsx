import React,{ Component } from 'react'
import './Title.scss';
// import { NavLink } from 'react-router-dom'
class Title extends Component {
  render () {
    return (
      <div className = "titles1">
        <h3>
          <em className="iconfont icon-shugang"></em>
          {this.props.title.tlt}
        </h3>
        <a href={ this.props.title.url }>
          <em className="iconfont icon-xuanxiang"></em>
        </a>
      </div>
    )
  }
}

export default Title
