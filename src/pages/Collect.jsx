import React, { Component } from 'react';
import '@/scss/Collect.scss';
import Back from "@/components/back/back.jsx";
class Com extends Component {
  componentWillMount() {
    this.setState({
      collArr:JSON.parse(window.localStorage.getItem("collArr"))
    })
  }


  // componentDidMount() {
  //   this.setState({
  //     collArr:JSON.parse(window.localStorage.getItem("collArr"))
  //   })
  // }
  collRemove  (id)  {
    this.setState({
      collArr: this.state.collArr.filter((item, index) => {
        if (item.productId === id) {
          this.state.collArr.splice(index,1);
        } else {
          return item;
        }
      })
    });
    window.localStorage.setItem("collArr",JSON.stringify(this.state.collArr));
  }

  render () {
    var html = '';
    if (this.state.collArr.length === 0) {
        html = (
        <div className="collEmpty">
          <div className="emptyBox">
            <span className="iconfont icon-shoucang"></span>
            <p>您暂无收藏任何商品</p>
            <h3>随便逛逛</h3>
          </div>
        </div>
        )
      } else {
        html = (
          <ul className="collHave">
              {
                this.state.collArr.map((item, index) => {
                return(
                  <li key={index}>
                    <h4>
                      <img src={item.imgUrl} alt=""/>
                    </h4>
                    <div className="collCenter">
                      <p>{ item.productName }</p>
                      <span>￥{ item.price }</span>
                    </div>
                    <s className="iconfont icon-shanchu" onClick={this.collRemove.bind(this,item.productId)}></s>
                  </li>
                )
                })
              }
          </ul>
        )
      }
    return (
      <div className="collectBox">
        <header className="collectHeader">
          <Back props={this.props}></Back>
          <span className="iconfont icon-xuanxiang3"></span>
        </header>
        <div className="collectContent">
          { html }
        </div>
        <div className="collectFooter">
        <p>
          YouHuo2007-2019 南京新与力文化传播有限公司
        </p>
        </div>
      </div>
    )
  }
}

export default Com
