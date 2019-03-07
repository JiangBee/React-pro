import React, {Component} from 'react'
import {Carousel} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import api from '../api/division';
import {Link} from 'react-router-dom';
import '@/scss/division.scss';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 150,
      bannerdataClo: [],
      clothingList: [],
      sortnum: 1
    };
  }

  downFn() {
    let number = this.state.sortnum;
    if (number === 1) {
      number = -1;
      api.requestDataDown(number).then(data => {
        // console.log(data)
        this.setState({
          clothingList: data,
          sortnum: number
        })
      })
    } else if (number === -1) {
      number = 1;
      api.requestDataDown(number).then(data => {
        // console.log(data)
        this.setState({
          clothingList: data,
          sortnum: number
        })
      })
    }
  }

//默认排序
  Fn = (e) => {
    api.requestClothingList().then(data => {
      this.setState({
        clothingList: data
      })
    });
  };

  componentDidMount() {
    api.requestBannerClo().then(data => {
      this.setState({
        bannerdataClo: data
      })
    });
    api.requestClothingList().then(data => {
      this.setState({
        clothingList: data
      })
    });
  }

  render() {
    return (
      <div className="content">
        <Carousel
          autoplay={true}
          infinite
          dots={true}
        >
          {this.state.bannerdataClo.map((item, index) => (
            <a
              key={index}
              style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
            >
              <img
                src={item.imgurl}
                alt=""
                style={{width: '100%', verticalAlign: 'top'}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({imgHeight: 'auto'});
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className="listBox">
          <div className="sort">
            <ul>
              <li onClick={(e) => {
                this.Fn(e)
              }}>默认<i className="iconfont icon-xiasanjiao"></i></li>
              <li>新品</li>
              <li>人气</li>
              <li onClick={this.downFn.bind(this)}>
                价格
                <i className="iconfont icon-lingxing"></i>
              </li>
              <li>筛选<i className="iconfont icon-xiasanjiao"></i></li>
            </ul>
          </div>
          <ul className="movielist">
            {
              this.state.clothingList.map((item, index) => {
                return (
                  <Link to={'/detail/' + item.productId} key={index}>
                    <div className="movegoods">
                      <h4>
                        <img src={item.imgUrl} alt=""/>
                      </h4>
                      <p>{item.productName}</p>
                      <span>￥{item.price}.00</span><span className="iconfont icon-shoucang"></span>
                    </div>
                  </Link>)
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Com
