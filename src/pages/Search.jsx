import React from 'react';
import Back from "@/components/back/back.jsx";
import { SearchBar } from 'antd-mobile';
import api from "@/api/search/index.js";
import {Link} from "react-router-dom";
import '@/scss/searchStyle.scss'
class Com extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      value: '',
      watchlist: [],
      clothlist: []
    }
  }

  componentDidMount() {
    api.requestData("http://47.102.124.49:3000/api/product/distinct").then( data => {
      // console.log(data);
      this.setState({
        watchlist:data
      })
    });
    api.requestData("http://39.105.39.134:3000/api/product/distinct").then(data => {
      // console.log(data);
      this.setState({
        clothlist: data
      })
    })
  }

  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  };

  goBrand = (value) => {
    console.log(value);
    //  此处跳化妆品页面   ---- 携带传递的值
    this.props.history.push("/search/brand/" + value);
  };


  render () {
    let wlist =[];
    let clolist =[];
    this.state.watchlist.map((item,index) => {
      wlist.push(
        <Link to={"/search/brand/" + item } key={index}>
          {item}
        </Link>
      );
      return ''
    });

    this.state.clothlist.map((item,index) => {
      clolist.push(
        <Link to={"/search/brand/" + item } key={index}>
          {item}
        </Link>
      );
      return ''
    });
    return (
      <div className="box searchbox">
        <div className="content searchcontent">
          <header className="searchheader">
            <Back props={this.props}></Back>
            <span>搜索</span>
            <span className="iconfont icon-xuanxiang3"></span>
          </header>
          <div className="center">
            <SearchBar
              // value={this.state.value}
              placeholder="Search"
              onSubmit={
                (value) => {
                  this.goBrand(value)
                }
              }
              onClear={value => console.log(value, 'onClear')}
              onCancel={() => console.log('onCancel')}
              showCancelButton
              onChange={this.onChange}
            />
          </div>
          <div className="watchlist">
            <span>你可能喜欢:</span>
            {wlist}
          </div>
          <div className="clothlist">
            <p>你可能还想要:</p>
            <div className="kiki">
              {clolist}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com
