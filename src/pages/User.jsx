import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '@/scss/user.scss';
import { Toast } from 'antd-mobile';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      count:'',
      login:'',
      show:'',
      signout:''
    }
  }
  componentWillMount() {
    if (JSON.parse(window.localStorage.getItem("collArr")) === null) {
      this.setState({
        count: 0
      })
    } else {
      this.setState({
        count: (JSON.parse(window.localStorage.getItem("collArr"))).length
      })
    }

    if (window.localStorage.getItem("isLogin") === "ok" ) {
      this.setState({
        login: <a className="login-remove">
          <span>Hi,{window.localStorage.getItem("userid")}</span>
        </a>,
        signout:<button className="sep-line" onClick={this.signout.bind(this)}>退出</button>
      })
    } else {
      this.setState({
        login:  <a className="login-btn" >
          <button className="login-center" onClick={this.golaginFn.bind(this, 'login')}>登录</button>
          <button className="login-center" onClick={this.goregisterFn.bind(this, 'register')}>注册</button>
        </a>,
        signout:'',
        count:''
      })
    }

  }

  componentDidMount() {
    axios.get('http://47.102.124.49:3000/api/product?pageNumber=10')
      .then(data => {
        // console.log(data.data.data)
        this.setState({
          list: data.data.data
        })
      })
  }

  goregisterFn(type) {
    // console.log(this)
    this.props.history.push('/userapp/' + type)
  }

  golaginFn(type) {
    // console.log(this)
    this.props.history.push('/userapp/' + type)
  }

  //锚点定位
  scrollToAnchor = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  // 退出登录模块
  signout () {
    window.localStorage.clear('isLogin');
    window.localStorage.clear('userid');
    window.localStorage.clear('collArr');
    this.setState({
      login:  <a className="login-btn">
        <button className="login-center" onClick={this.golaginFn.bind(this, 'login')}>登录</button>
        <button className="login-center" onClick={this.goregisterFn.bind(this, 'register')}>注册</button>
      </a>,
      signout:'',
      count:'',
    });
    Toast.info('已退出登录', 1);
  }

  render() {
    let listarr = this.state.list;
    let listHtml = [];
    if (listarr.length === 0) {
      listHtml = <li>正在加载...</li>
    } else {
      listarr.map((item, index) => {
        listHtml.push(
          <Link to={'/detail/' + item._id} key={item._id}>
            <img src={item.image}/>
            <p className="p1"> {item.title} </p>
            <p className="p1"> ￥{item.price}.00</p>
          </Link>
        );
        return "";
      })
    }


    return (
      <div className="content">
        <div className="banner">
          <div className="login-go">
            <div className="left">
              <div className="user-avatar" data-avatar=""></div>
              <div className="level level-0"></div>
            </div>
            <div className="right" id="top">
              <div className="name eps">YOHO-有货</div>
            </div>
          </div>
          {this.state.login}
        </div>
        <div className="list1">
          <p className="left">默认购物频道</p>
          <a className="right">
            <span className="span2">{this.state.signout}</span>
          </a>
        </div>
        <div className="list2">
          <p className="left">我的订单</p>
          <Link to="" className="right">全部订单
            <span className="span2">></span>
          </Link>
        </div>
        <ul className="list3">
          <li className="li1">
            <div className="item1"><span className="fa fa-credit-card-alt fa-lg"></span><p>代付款</p></div>
            <div className="item1"><span className="fa fa-arrow-right fa-lg"></span><p>代发货</p></div>
            <div className="item1"><span className="fa fa-truck fa-lg"></span><p>待收货</p></div>
          </li>
          <li className="li2">
            <div className="item1"><span>{this.state.count*1 >0 ? this.state.count:0}</span><p><Link to="/userapp/collect">商品收藏</Link></p></div>
            <div className="item1"><span>0</span><p>品牌收藏</p></div>
            <div className="item1"><span>0</span><p>浏览记录</p></div>
          </li>
        </ul>
        <div className="list4">
          <h3 className="fa fa-money fa-lg"> </h3>
          <div className="list-right">
            <i>优惠券</i>
            <Link to="" className="right">
              <span className="span2">></span>
            </Link>
          </div>
        </div>
        <div className="list5">
          <h3 className="fa fa-dollar fa-lg"> </h3>
          <div className="list-right">
            <i>有货币</i>
            <Link to="" className="right">
              <span className="span2">></span>
            </Link>
          </div>
        </div>
        <div className="list4">
          <h3 className="fa fa-commenting fa-lg"> </h3>
          <div className="list-right">
            <i>消息</i>
            <Link to="" className="right">
              <span className="span2">></span>
            </Link>
          </div>
        </div>
        <div className="list5">
          <h3 className="fa fa-volume-control-phone fa-lg"> </h3>
          <div className="list-right">
            <i>服务与反馈</i>
            <Link to="" className="right">
              <span className="span2">></span>
            </Link>
          </div>
        </div>
        <div className="banner-list">
          <a href="https://activity.yoho.cn/feature/357.html?share_id=2391&amp;title=   邀请好友 30元现金券无限赚" id="299771"
             name="一张图片" rel="nofollow">
            <img
              src="//img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60"
              alt="活动图片"/>
          </a>
        </div>
        <div className="banner-list">
          <a href="http://www.yohobuy.com" id="288447" name="一张图片" rel="nofollow">
            <img
              src="//img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60"
              alt="活动图片"/>
          </a>
        </div>
        <h2 className="htitle">&nbsp;&nbsp;&nbsp;| &nbsp;为你选择</h2>
        <ul className="help">
          {listHtml}
        </ul>
        <p className="op-row">
          {/*<Link to="/userapp/login">登录</Link>*/}
          {/*<button className="sep-line" onClick={this.signout.bind(this)}>退出登录</button>*/}
          {/*<Link to="/userapp/register">注册</Link>*/}
          <span className="back-to-top" onClick={
            () => {
              this.scrollToAnchor("top");
            }
          }>
              回到顶部
            <i id="gotop" className="fa fa-hand-o-up fa-lg"></i>
          </span>
        </p>
        {/* <div className="common-back"></div> */}

        <div className="common-back" onClick={
          () => {
            this.scrollToAnchor("top");
          }
        }>
        </div>
      </div>
    )
  }
}

export default Com
