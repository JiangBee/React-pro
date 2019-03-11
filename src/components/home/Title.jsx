import React,{ Component } from 'react'
import {Link} from "react-router-dom";
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
        <Link to={ this.props.title.url }>
          <em className="iconfont icon-xuanxiang"></em>
        </Link>
      </div>
    )
  }
}

export default Title
