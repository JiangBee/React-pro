import React from 'react';

class Com extends React.Component {
  pageChange (type) {
    console.log(this);
    this.props.history.push("/userapp/" + type);
  }
  render () {
    return (
      <div className="content">
        User
        <button onClick={ this.pageChange.bind(this,"register") }>注册</button>
        <button onClick={ this.pageChange.bind(this,"login") }>登录</button>
      </div>
    )
  }
}

export default Com
