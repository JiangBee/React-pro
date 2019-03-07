import React from 'react';
import Back from "@/components/back/back.jsx";
import api from "@/api/search/index.js";
import apiHome from '@/api/home/index.js';
import CosmeticsList from '@/components/brand/CosmeticsList.jsx'
import {Link} from "react-router-dom";
import '@/scss/searchStyle.scss'
class Com extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      value: '',
      watchlist: ["宝玑", "爱彼", "宝珀", "雅典", "格拉苏蒂∙原创", "芝柏", "积家", "伯爵", "亨利慕时", "江诗丹顿"], // 手表品牌
      clothlist: ["KM", "卡丹路", "唐狮", "GUESS", "KLM", "猫背", "Me", "City", "MINS", "森馬", "左岸"], // 服装品牌
      coslist: [], // 化妆品列表
      clolist: [], // 服装列表
      watlist :[],  // 手表列表
      keywords: '',
      recommedList: [],
      goodslist: []
    }
  }
  componentWillMount() {
    this.setState({
      keywords:this.props.match.params.id
    });


  }

  componentDidMount() {
    // 推荐部分
    apiHome.requestData().then(data => {
      // console.log(data);
      this.setState({
        recommedList: data
      })
    });
  // console.log(this.state.clothlist.indexOf(this.state.keywords),this.state.watchlist.indexOf(this.state.keywords))
    //判断传过来的值属于那个区间
    if (this.state.clothlist.indexOf(this.state.keywords) !== -1) {
      // 服装
      api.requestData("http://39.105.39.134:3000/api/product/search?brand=" + this.state.keywords).then(data => {
        // console.log(data.data);
        this.setState({
          clolist: data.data
        });
      });
    } else if(this.state.watchlist.indexOf(this.state.keywords) !== -1) {
      // 轻奢
      api.requestData("http://47.102.124.49:3000/api/product/search?brand=" + this.state.keywords).then(data => {
        // console.log(data.data);
        this.setState({
          watlist: data.data
        })
      });
    } else {
      // 化妆品请求数据
      api.requestData("http://47.102.42.118:3000/api/product/keyword?title=" + this.state.keywords).then(data => {
        // console.log(data.data);
        this.setState({
          coslist: data.data
        })
      });
    }
  }

  render () {
    let goodsList =[];
    // console.log(this.state.watlist.length);
    if (this.state.watlist.length >0) {
      // 手表
      this.state.watlist.map((item, index) => {
        goodsList.push(
          <Link to = { '/detail/' + item._id } key = { index }>
            <div className="brandmovegoods">
              <h4>
                <img src = { item.image } alt={index}/>
              </h4>
              <p>{ item.watchname }</p>
              <span>￥{ item.price }.00</span><span className="iconfont icon-shoucang"></span>
            </div>
          </Link>
        );
        return '';
      })
    } else if (this.state.clolist.length >0) {
      // 服装
      this.state.clolist.map((item, index) => {
        goodsList.push(
          <Link to = { '/detail/' + item.productId } key = { index }>
            <div className="brandmovegoods">
              <h4>
                <img src = { item.imgUrl } alt={index}/>
              </h4>
              <p>{ item.productName }</p>
              <span>￥{ item.price }.00</span><span className="iconfont icon-shoucang"></span>
            </div>
          </Link>
        );
        return '';
      })
    } else {
      // 化妆品
      this.state.coslist.map((item, index) => {
        goodsList.push(
          <Link to = { '/detail/' + item.num } key = { index }>
            <div className="brandmovegoods">
              <h4>
                <img src = { item.myimg } alt={index}/>
              </h4>
              <p>{ item.title }</p>
              <span>￥{ item.orange }.00</span><span className="iconfont icon-shoucang"></span>
            </div>
          </Link>
        );
        return '';
      })
    }

    return (
      <div className="box searchbox">
        <div className="content searchcontent">
          <header className="searchheader brandheader">
            <Back props={this.props}></Back>
            <span>想你所想</span>
            <span className="iconfont icon-xuanxiang3"></span>
          </header>
          <div className="brandtoptitle">
            <ul>
              <li>默认</li>
              <li>新品</li>
              <li>人气</li>
              <li>价格</li>
              <li>筛选</li>
            </ul>
          </div>
          <div className="center">
            <div className="brandmove">
              <ul className="brandmoveList goodstop">
                {goodsList}
              </ul>
            </div>
          </div>
          <div className="recommedtitle ">
            <span className="fa fa-heartbeat"></span>&emsp;
            <span>你可能还想看</span>
            &emsp;<span className="fa fa-heartbeat"></span>
          </div>
          <CosmeticsList list = { this.state.recommedList }/>
        </div>
      </div>
    )
  }
}

export default Com
