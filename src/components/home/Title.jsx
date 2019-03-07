import React,{ Component } from 'react'
import './Title.scss';
// import { NavLink } from 'react-router-dom'
class Title extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className = "titles1">
        <h3>
          <i className="iconfont icon-shugang"></i>
          {this.props.title.tlt}
        </h3>
        <a href={ this.props.title.url }>
          <i className="iconfont icon-xuanxiang"></i>
        </a>
      </div>
    )
  }
}

export default Title
