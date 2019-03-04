import React,{ Component } from 'react'
import './Title.scss';
class Title extends Component {
  render () {
    return (
      <div className = "title">
        <h3>
          <i className="iconfont icon-shugang"></i>
          {this.props.title.tlt}
        </h3>
        <a href="" className="iconfont icon-xuanxiang"></a>
      </div>
    )
  }
}

export default Title
