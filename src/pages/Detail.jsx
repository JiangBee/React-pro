import React from 'react';
import api from '@/api/detail/index.js';
import Hapi from '@/api/Huan/index.js';
import apiCookie from '@/api/goods/Cookie.js';
import Yapi from '@/api/Yu/index.js';
import cartApi from '@/api/cart/index.js';
import Back from '@/components/back/back.jsx';
import '@/scss/detailStyle.scss';
import { Toast } from 'antd-mobile';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      goodlist: [],
      imgUrl: '',
      brand: '',
      price: '',
      productName: '',
      productId: '',
      // 18813007814
      userid: '',
    };
  }

  //
  componentWillMount() {
    // console.log(window.localStorage.getItem("userid"));
    this.setState({
      userid: window.localStorage.getItem("userid") *1
    })
  }

  //根据返回的id进行请求数据
  componentDidMount () {
    // console.log(window.localStorage.getItem("userid"));
    // this.setState({
    //   userid: window.localStorage.getItem("userid") *1
    // })
    const id = this.props.match.params.id + '';
    if (id.length === 5) {
      Hapi.requestDetailData(id).then(data => {
        console.log(data);
        let detaildata = data[0];
        // console.log(detaildata);
        this.setState({
          imgUrl: detaildata.myimg,
          brand: detaildata.brand,
          price: detaildata.orange,
          productName: detaildata.title,
          productId: detaildata.num
        })
      });
    } else if (id.length === 7) {
      api.requestDetailData(id).then(data => {
        let detaildata = data.data.data[0];
        this.setState({
          imgUrl: detaildata.imgUrl,
          brand: detaildata.brand,
          price: detaildata.price,
          productName: detaildata.productName,
          productId: detaildata.productId
        })
      })
    } else {
      Yapi.requestDetailData().then(data => {
        // console.log(data);
        for (var i in data) {
          if (id === data[i]._id) {
            this.setState({
              imgUrl: data[i].image,
              brand: data[i].brand,
              price: data[i].price,
              productName: data[i].watchname,
              productId: data[i]._id
            });
          }
        }
      })
    }

    //请求服务端数据
    cartApi.requestGoodsData(this.state.userid,this.state.goodlist).then(data => {
      // console.log(data[0].goodlist)
      if (data[0].goodlist === null) {
        console.log(1)
        this.setState({
          goodlist: []
        })
      } else {
        this.setState({
          goodlist: JSON.parse(data[0].goodlist)
        })
      }

      apiCookie.setCookie('goodslist',data[0].goodlist,10);
     // console.log( apiCookie.getCookie('goodslist'))
    })

  }

  //  加入购物车操作
  joinCart (e) {
    if (e.cancelable) {
      // 判断默认行为是否已经被禁用
      if (!e.defaultPrevented) {
        e.preventDefault()
      }
    }
    if (localStorage.getItem("isLogin") === 'ok') {
      let goodsobj = {
        'imgUrl': this.state.imgUrl,
        'price': this.state.price,
        'productName': this.state.productName,
        'productId': this.state.productId,
        'count': 1,
        'flag': false
      };
      var goodslist = [];
      var flag = true;
      if (apiCookie.getCookie('goodslist') !== 'null') {
        goodslist = JSON.parse(apiCookie.getCookie('goodslist'));
        for ( var i in goodslist) {
          if (goodslist[i].productId === goodsobj.productId) {
            goodslist[i].count = Number(goodslist[i].count);
            goodslist[i].count ++;
            flag=false;
          }
          Toast.info('加入购物车成功！', 1);
        }
        if (flag) {
          if (goodslist === null) {
            goodslist=[];
          }
          goodslist.push(goodsobj);
          this.setState({
            goodlist: this.state.goodlist.push(goodsobj)
          })
        }
      } else {
        this.setState({
          goodlist: this.state.goodlist.push(goodsobj)
        })
        goodslist.push(goodsobj)
      }
      apiCookie.setCookie('goodslist', JSON.stringify(goodslist), 10)

      //更新服务器数据
      cartApi.responseGoodsData(this.state.userid,JSON.stringify(goodslist)).then( data => {
        console.log(data);
      })

      //测试数据
      cartApi.requestGoodsData(this.state.userid,this.state.goodlist).then(data => {
        console.log(data);
      })

    } else {
      // /userapp/register
      this.props.history.push("/userapp/register");
    }
  }

  goCart () {
    if (localStorage.getItem("isLogin") === 'ok') {
      this.props.history.push("/cart");
    } else {
      this.props.history.push("/userapp/register");
    }
  }

  // 收藏商品
  goCollect () {
    var isNew = true
    if (localStorage.getItem('collArr')) {
      var arr = []
      arr = JSON.parse(localStorage.getItem('collArr'));
      for(var i = 0 ; i< arr.length ; i++){
        if (arr[i].productId === this.state.productId) {
          Toast.info('该商品已收藏！', 1);
          isNew = false;
        }
      };
      if(isNew === true){
        collArr = {
          imgUrl: this.state.imgUrl,
          price: this.state.price,
          productName: this.state.productName,
          productId: this.state.productId
        }
        arr.push(collArr)
        localStorage.setItem('collArr', JSON.stringify(arr))
        Toast.info('收藏成功', 1);
      }
    } else {
      // console.log('创建')
      var arr = []
      var collArr = {
        imgUrl: this.state.imgUrl,
        price: this.state.price,
        productName: this.state.productName,
        productId: this.state.productId
      }
      arr.push(collArr)
      localStorage.setItem('collArr', JSON.stringify(arr))
      Toast.info('收藏成功', 1);
    }
  }

  render () {
    return (
      <div className="box">
        <header className="header detailheader">
          <Back props={this.props}></Back>
          <p>商品详情</p>
          <span className="fa fa-th-list fa-lg"></span>
        </header>
        <div className="content ">
          <div className="goodsdetail">
            <p><img src={this.state.imgUrl} alt={this.state.productName}/></p>
            <h2>
              <span>Yohou · 买得起的好设计</span>
            </h2>
            <h3>好物&nbsp;·&nbsp;{ this.state.productName }</h3>
            <h4>
              <span className="fa fa-rmb fa-lg">&nbsp;{this.state.price }.00</span>
            </h4>
            <h5>
              <span className="fa fa-hand-o-right">七天无理由退货</span>
              <span className="fa fa-hand-o-right">48小时发货</span>
              <span className="fa fa-hand-o-right">担保交易</span>
            </h5>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <span className="fa fa-cart-plus fa-lg"></span>
                <p onClick={this.goCart.bind(this)}>购物车</p>
              </li>
              <li>
                <span className="fa fa-home fa-lg"></span>
                <p>品牌店铺</p>
              </li>
              <li>
                <span className="fa fa-heartbeat fa-lg"></span>
                <p onClick={this.goCollect.bind(this)}>收藏</p>
              </li>
              <li>
                <span></span>
                <button onClick={this.joinCart.bind(this)}>加入购物车</button>
              </li>
            </ul>
          </div>
          <div className="detailinfo">
            <div className="price-description page-block">
              <h2 className="title">
                特别说明 &emsp;
                <span className="en-title">SPECIAL DESCRIPTION</span>
              </h2>
              <div className="price-desc-detail">
                <p className="price-item-name">广告禁用词</p>
                <p className="price-item-content font">根据新广告法规定，所有页面不得出现广告禁用词。我们在此郑重表态：支持新广告法，也为了不影响消费者正常购物，我们已经在排查修改；本页面所有广告禁用词在此声明失效，不作为赔付理由，请为真正的消费者让路。维权是双向的，希望各位消费者理解，在此感谢！</p>
                <p className="price-item-name">页面价格</p>
                <p className="price-item-content font">划线价格指商品的吊牌价、品牌指导价或该商品的曾展示过的销售价等，并非原价，仅供参考。无划线价格指商品的实时销售价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券/码、有货币等发生变化，最终以订单结算页价格为准。</p>
                <p className="price-item-name">价格异常</p>
                <p className="price-item-content font">可能因为存在系统缓存、页面延迟等异常情况，导致价格、促销或其他类型活动显示异常，商品具体结算信息以订单结算页面显示为准。如您发现此类情况，请立即联系我们客服调整。</p>
                <p className="price-summary font">此说明仅当出现价格比较时有效，若商家单独对价格进行说明的，以商家的表述为准。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com
