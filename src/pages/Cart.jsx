import React from 'react';
import Back from '@/components/back/back.jsx';
import apiCookie from '@/api/goods/Cookie.js';
import '@/scss/cartStyle.scss';
class Com extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      goodlist: [],
      sum_price: 0
    }
  }
  componentDidMount() {
    let goodlist = JSON.parse(apiCookie.getCookie('goodlist'));
    this.setState({
      goodlist: goodlist
    });
  }

  //增操作
  add = (e,id) => {
    this.setState({
      goodlist: this.state.goodlist.map((item, index) => {
        if (item.productId === id) {
          item.count = item.count*1 + 1;
          return item
        } else {
          return item
        }
      })
    })
    this.SumPrice()
    apiCookie.setCookie('goodlist', JSON.stringify(this.state.goodlist),1);
  }

  //减操作
  reduce = (e,id) => {
    this.setState({
      goodlist: this.state.goodlist.map((item, index) => {
        if(item.productId === id) {
          item.count = item.count *1 - 1;
          return item;
        } else {
          return item
        }
      })
    })
    this.SumPrice();
    apiCookie.setCookie('goodlist', JSON.stringify((this.state.goodlist)));
  }

  //删除操作
  // deleteGoods = (e,id) => {
  //   console.log(id);
  //   this.setState({
  //     goodlist: this.state.goodlist.filter((item, index) => {
  //       if (item.productId !== id) {
  //         console.log(item.productId)
  //         return true
  //       } else {
  //         return false
  //       }
  //     })
  //   })
  //   console.log(this.state.goodlist);
  //   setTimeout(() => {
  //     this.SumPrice();
  //   })
  //   apiCookie.setCookie('goodlist', JSON.stringify(this.state.goodlist), 10)
  // }

  //删除操作
  deleteGoods = (e,id) => {
    console.log(id);
    this.setState({
      goodlist: this.state.goodlist.filter((item, index) => {
        if (item.productId !== id) {
          this.state.goodlist.splice(index,1);
          return item;
        } else {
          return item;
        }
      })
    })
    setTimeout(() => {
      this.SumPrice();
    })
    apiCookie.setCookie('goodlist', JSON.stringify(this.state.goodlist), 10)
  }

  //实现全选与反选的操作
  CheckAllorNoAll=(e,id)=>{
    this.setState({
      goodlist:this.state.goodlist.map((item,index)=>{
        if(item.productId === id){
          item.checked=!item.checked
        }
        return item
      })
    })
    var flag=this.state.goodlist.every((item,index)=>{
      if(item.checked===false){
        return false
      }else {
        return true
      }
    })
    if(flag===true){
      this.refs.checkALL.checked=true
    }else {
      this.refs.checkALL.checked=false
    }
    this.SumPrice()
  }

  //判断全选状态
  CheckedAll = (e) => {
    if (e.target.checked === true) {
      this.setState({
        goodlist: this.state.goodlist.map((item, index) => {
          item.checked = true;
          return item;
        })
      })
    } else if (e.target.checked === false) {
      this.setState({
        goodlist: this.state.goodlist.map((item, index) => {
          item.checked =false;
          return item
        })
      })
    }
    this.SumPrice()
  }

  //计算总价
  SumPrice = () => {
    var sum = 0;
    this.state.goodlist.forEach((item, index) => {
      if (item.checked === true) {
        sum += item.count * item.price;
      }
    })
    this.setState({
      sum_price: sum
    })
  }
  // 改变文本框的值
  getInputText = (e, id) => {
    this.setState({
      goodlist: this.state.goodlist.map((item, index) => {
        if(item.productId === id){
          item.count = e.target.value
          return item
        } else {
          return item
        }
      })
    })
    this.SumPrice()
  }

  settleAccounts = () => {
    let shopping = [];
    this.state.goodlist.forEach((item, index) => {
      if (item.checked === true) {
        shopping.push(item);
      }
    })
    console.log(shopping);
    window.localStorage.setItem("shopping", JSON.stringify(shopping))
    window.localStorage.setItem("sumprice", JSON.stringify(this.state.sum_price));
    this.props.history.push("/home");
  }

  render () {
    let html =[];
    this.state.goodlist.map((item, index) => {
      html.push(
        <li key={index}>
          <div className="cartleft" key={index}>
            <input type="checkbox" className="choose" checked={item.checked} onChange={
              (e) => {this.CheckAllorNoAll(e,item.productId)}
            }/>
            <p>
              <img src={item.imgUrl} alt="index"/>
            </p>
          </div>
          <div className="cartright">
            <h3>{item.productName}</h3>
            <div>
              <p>￥:{item.price}</p>
              <div className="right">
                <button onClick={
                  (e) => {
                    this.reduce(e,item.productId)
                  }
                }>-</button>
                <input type="text" value={item.count} onChange={
                  (e) => {
                    this.getInputText(e,item.productId)
                  }
                }/>
                <button onClick={
                  (e) => {
                    this.add(e, item.productId)
                  }
                }>+</button>
                <button className="fa fa-trash-o" onClick={
                  (e) => {
                    this.deleteGoods(e, item.productId)
                  }
                  // this.deleteGoods.bind(this,item.productId)
                }></button>
              </div>
            </div>
          </div>
        </li>
      )
    })
    return (
      <div className="cartbox">
        <header className="header cartheader">
          <Back props={this.props}></Back>
          <p>购物车</p>
          <span className="fa fa-th-list fa-lg"></span>
        </header>
        <div className="content cartcontent">
          <ul className="cart">
            { html }
          </ul>
        </div>
        <div className="cartbottom">
          <h5>
            <input type="checkbox" ref="checkALL" onChange={
              (e)=>{
                this.CheckedAll(e)
              }
            }/>全选</h5>
          <p>合计: {this.state.sum_price}</p>
          <button onClick={ () => {
            this.settleAccounts()
          }}>
            提交订单
          </button>
        </div>
      </div>
    )
  }
}

export default Com
