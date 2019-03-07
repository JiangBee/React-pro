import React from 'react';
import './buttonStyle.scss';
class Back extends React.Component{
  goback () {
    // console.log(this.props);
    this.props.props.history.go(-1);
  }
  render () {
    return (
      <button className="fa fa-reply fa-lg" onClick={this.goback.bind(this)}></button>
    )
  }
}
export default Back;
