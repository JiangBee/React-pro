import React from 'react';
import Back from '@/components/back/back.jsx';
import apiCookie from '@/api/goods/Cookie.js';
import {Link} from 'react-router-dom';
import cartApi from '@/api/cart/index.js'
import '@/scss/cartStyle.scss';
import { Toast } from 'antd-mobile';
import '@/scss/listStyle.scss';
class Com extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      goodtruelist: [],
      goodlist: [],
      sum_price: 0,
      userid: '',
      recommedlist: [
        {
          '_id': '5c6d5420657b5c76b27f3e6c',
          'productId': 3672039,
          'productName': '无袖上衣',
          'imgUrl': 'http://xqproduct.xiangqu.com/FhViPxVsTVPw0aIsf8z8gOCEQZuX?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 280,
          'sale': 26,
          'color': '薄荷绿',
          'count': 64,
          'brand': 'GUESS'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e6d',
          'productId': 3585743,
          'productName': '吊带背心',
          'imgUrl': 'http://xqproduct.xiangqu.com/FoluBuNGGCwkSOLyn_ZV3SC8W5B_?imageView2/2/w/300/q/90/format/jpg/750x750/',
          'price': 285,
          'sale': 27,
          'color': '纯色',
          'count': 65,
          'brand': 'KLM'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e6e',
          'productId': 3681826,
          'productName': '吊带背心',
          'imgUrl': 'http://xqproduct.xiangqu.com/Fm4pExcg2nMBu38QyvxI_O5q4S32?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 290,
          'sale': 28,
          'color': '素色',
          'count': 66,
          'brand': '猫背'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e6f',
          'productId': 3762718,
          'productName': '日系',
          'imgUrl': 'http://xqproduct.xiangqu.com/Ftsyo_0YNZmUKUcLKpAoXhk7jvDy?imageView2/2/w/300/q/90/format/jpg/1000x1047/',
          'price': 295,
          'sale': 29,
          'color': '素色',
          'count': 67,
          'brand': 'Me'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e70',
          'productId': 3764495,
          'productName': '外套潮',
          'imgUrl': 'http://xqproduct.xiangqu.com/FhTNmqc8onRSgNCyvBo1fNOmJhtO?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 300,
          'sale': 10,
          'color': '黑色',
          'count': 68,
          'brand': 'City'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e71',
          'productId': 3756165,
          'productName': '吊带',
          'imgUrl': 'http://xqproduct.xiangqu.com/Fj0w0PtFxIs8_F3bh7nWhtjCGNLY?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 305,
          'sale': 11,
          'color': '素色',
          'count': 69,
          'brand': 'MINS'
        }
      ]
    }
  }
  componentWillMount() {
    // console.log(window.localStorage.getItem("userid"));
    this.setState({
      userid: window.localStorage.getItem("userid")
    })
  }

  componentDidMount() {
    cartApi.requestGoodsData(this.state.userid,'').then(data => {
      // console.log(data[0])
      this.setState({
        goodlist:JSON.parse( data[0].goodlist)
      })
    })
    //将取出来的数据进行cookie存储，防止用户进行页面刷新操作
    apiCookie.setCookie('goodlist', JSON.stringify(this.state.goodlist),1);
    let goodlist = JSON.parse(apiCookie.getCookie('goodlist'));
    this.setState({
      goodlist: goodlist
    });

    //
    // setTimeout(() => {
    //   Toast.hide();
    // }, 1000);
  }


  //增操作
  add = (e,id) => {
    e.preventDefault();
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
    cartApi.responseGoodsData(this.state.userid,JSON.stringify(this.state.goodlist))
      .then(data => {
        console.log(data)
      })
  }

  //减操作
  reduce = (e,id) => {
    e.preventDefault();
    this.setState({
      goodlist: this.state.goodlist.map((item, index) => {
        if(item.productId === id) {
          if (item.count *1 >1) {
            item.count = item.count *1 - 1;
          }
          return item;
        } else {
          return item
        }
      })
    })
    this.SumPrice();
    apiCookie.setCookie('goodlist', JSON.stringify((this.state.goodlist)));
    cartApi.responseGoodsData(this.state.userid,JSON.stringify(this.state.goodlist))
      .then(data => {
        console.log(data)
      })
  }

   failToast  () {
    Toast.fail('Load failed !!!', 1);
  }

  //删除操作
  deleteGoods = (e,id) => {
    e.preventDefault();
    // console.log(id);
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
    cartApi.responseGoodsData(this.state.userid,JSON.stringify(this.state.goodlist))
      // .then(data => {
      //   // console.log(data)
      // })
  }

  //实现复选框 选择 与 反选 的操作
  CheckAllorNoAll=(e,id)=>{
    e.preventDefault();
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
    e.preventDefault();
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
    e.preventDefault();
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

    //用户点击提交时, 将本地存储的商品列表信息进行存储，
    // let goodtruelist = JSON.parse(apiCookie.getCookie('goodlist'));
    // console.log(goodtruelist);
    // cartApi.responseGoodsData()
    // console.log(shopping);

    window.localStorage.setItem("shopping", JSON.stringify(shopping))
    window.localStorage.setItem("sumprice", JSON.stringify(this.state.sum_price));
    if(this.state.sum_price !== 0) {
      this.props.history.push("/order");
    }
  }

  render () {
    let recommedlist = [];
    let html =[];

    //商品列表
    if (this.state.goodlist === null) {
      html.push(
        <h2 className="showNothing">赶紧选购吧！！</h2>
      )
    } else {
      this.state.goodlist.map((item, index) => {
        html.push(
          <li key={index}>
            <div className="cartleft" key={index}>
              <input type="checkbox" className="choose" checked={item.checked} onChange={
                (e) => {this.CheckAllorNoAll(e,item.productId)}
              }/>
              <p>
                <img src={item.imgUrl} alt={item.productId}/>
              </p>
            </div>
            <div className="cartright">
              <h3>{item.productName}</h3>
              <div>
                <p>￥:{item.price}</p>
                <div className="right">
                  <button onClick={
                    (e) => {
                      this.reduce(e,item.productId);
                      // this.failToast()
                    }
                  } >-</button>
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
        return ''
      })

    }

    // 推荐列表
    this.state.recommedlist.map((item,index) => {
      recommedlist.push(
          <Link to={'/detail/'+item.productId} key={item.productId}>
            <div className="goodsimg">
              <h4><img src={item.imgUrl} alt={index}/></h4>
              <p>{item.productName}&nbsp;·&nbsp;{item.brand}</p>
              <span className="fa fa-cny">&nbsp;{item.price}&nbsp;</span><span className="fa fa-heart-o"></span>
            </div>
          </Link>
      )
      return ''
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
            {html}
          </ul>
          <div className="cartbottom">
            <h5>
              <input type="checkbox" ref="checkALL" onChange={
                (e)=>{
                  this.CheckedAll(e)
                }
              }/>全选</h5>
            <p>合计:￥: {this.state.sum_price}</p>
            <button onClick={ () => {
              this.settleAccounts()
            }}>
              提交订单
            </button>
          </div>
          <div className="recommed">
            <h6>为你优选新品</h6>
            <ul className="movieList">
              {recommedlist}
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Com
