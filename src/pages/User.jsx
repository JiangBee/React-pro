import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '@/scss/user.scss';

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount () {
        axios.get('http://47.102.124.49:3000/api/product?pageNumber=50')
        .then(data => {
            console.log(data.data.data)
            this.setState({
                list: data.data.data
            })
        })
    }
    goregisterFn (type) {
        console.log(this)
        this.props.history.push('/registerapp/' + type)
    }
    golaginFn (type) {
        console.log(this)
        this.props.history.push('/loginapp/' + type)
    }

    // handleScrollTop() {
    //     console.log(window.scrollTo)
    //     window.scrollTo({
    //       left: 0,
    //       top: 0,
    //       behavior: 'smooth',
    //     });
    //   }
    render () {
        let listarr = this.state.list;
        let listHtml = [];
        if ( listarr.length === 0) {
            listHtml = <li>正在加载...</li>
        } else {
            listarr.map((item, index) => {
                listHtml.push(
                          <Link to={'/detail/'+ item._id} key = { item._id}>
                            <img src={item.image}/>
                            <p className="p1"> { item.title} </p>
                            <p className="p1"> ￥{ item.price}.00</p>
                          </Link>
                     )
                })
        }
        return (
            <div className = "content" >
            <div className = "banner">
        <div className="login-go">
            <div className="left">
                    <div className="user-avatar" data-avatar=""></div>
                    <div className="level level-0"></div>
            </div>
            <div className="right">
                    <div className="name eps">YOHO-有货</div>
            </div>
        </div>

            <a className="login-btn">
            <button className="login-center" onClick={this.golaginFn.bind(this, 'login')}>登录</button>
            <button className="login-center" onClick={ this.goregisterFn.bind(this, 'register')}>注册</button>
            </a>
            </div>
            <div className="list1">
                <p className="left">默认购物频道</p>
                <a href="#" className="right">男生NEM
                <span className="span2">></span>
                </a>
            </div>
            <div className="list2">
                <p className="left">我的订单</p>
                <a href="#" className="right">全部订单
                <span className="span2">></span>
                </a>
            </div>
            <ul className="list3">
                <li className="li1">
                    <div className="item1"> <span className="fa fa-credit-card-alt fa-lg"></span><p>代付款</p></div>
                    <div className="item1"> <span className="fa fa-arrow-right fa-lg"></span><p>代发货</p></div>
                    <div className="item1"> <span className="fa fa-truck fa-lg"></span><p>待收货</p></div>
                </li>
                <li className="li2">
                        <div className="item1"> <span>0</span><p>商品收藏</p></div>
                        <div className="item1"> <span>0</span><p>品牌收藏</p></div>
                        <div className="item1"> <span>0</span><p>浏览记录</p></div>
                </li>
            </ul>
            <div className="list4">
                 <h3 className="fa fa-truck fa-lg"></h3>
                <div className="list-right">
                    <i>优惠券</i>
                    <a href="#" className="right">
                        <span className="span2">></span>
                    </a>
                </div>
            </div>
            <div className="list5">
                 <h3 className="fa fa-dollar fa-lg"></h3>
                <div className="list-right">
                    <i>有货币</i>
                    <a href="#" className="right">
                        <span className="span2">></span>
                    </a>
                </div>
            </div>
            <div className="list4">
                 <h3 className="fa newspaper-o fa-lg"></h3>
                <div className="list-right">
                    <i>消息</i>
                    <a href="#" className="right">
                        <span className="span2">></span>
                    </a>
                </div>
            </div>
            <div className="list5">
                 <h3 className="fa fa-truck fa-lg"></h3>
                <div className="list-right">
                    <i>服务与反馈</i>
                    <a href="#" className="right">
                        <span className="span2">></span>
                    </a>
                </div>
            </div>
            <div className="banner-list">
                <a href="https://activity.yoho.cn/feature/357.html?share_id=2391&amp;title=   邀请好友 30元现金券无限赚" id="299771" name="一张图片" rel="nofollow">
                    <img src="//img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60" alt="活动图片"/>
                </a>
            </div>
            <div className="banner-list">
                <a href="http://www.yohobuy.com" id="288447" name="一张图片" rel="nofollow">
                    <img src="//img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60" alt="活动图片"/>
                </a>
            </div>
            <h2>&nbsp;&nbsp;&nbsp;| &nbsp;为你选择</h2>
            <ul className="help">

             { listHtml }

             </ul>

        <p className="op-row">
             <a href="/#/loginapp/login">登录</a>
                <span className="sep-line">|</span>
             <a href="/#/registerapp/register">注册</a>
            <span className="back-to-top">
                回到顶部
                <i id="gotop" className="fa fa-hand-o-up fa-lg"></i>
            </span>
        </p>
        {/* <div className="common-back"></div> */}

        <div className="common-back"></div>




    </div>
        )
    }
}

export default Com
