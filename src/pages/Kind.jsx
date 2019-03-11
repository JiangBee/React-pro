import React, { Component } from 'react'
import '@/scss/kind.scss';
import api from '../api/kind';
import { Link } from 'react-router-dom';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: ['服装区', '奢侈品区', '化妆品区'],
      Cosmetics: ['补水', '爽肤水', '美丽工匠', '提拉紧致', '套盒', '精油', '毛孔收缩', '清洁', '卸妆', '遮瑕',],
      Luxlist: ["宝玑", "爱彼", "宝珀", "雅典", "格拉苏蒂∙原创", "芝柏", "积家", "伯爵", "亨利慕时", "江诗丹顿"],
      Clolist: ["KM", "卡丹路", "唐狮", "GUESS", "KLM", "猫背", "Me", "City", "MINS", "森馬", "左岸"],
      val: '',
      listclo: [],
      listlux:[],
      listcos: [],
      changeType: 'clo',
      num: 0
    }
  }

  //初始渲染
  componentDidMount(){
    api.requestCloSort('KM').then(data => {
      this.setState({
        listclo: data
      })
    });
    api.requestLuxSort('宝玑').then(data => {
      this.setState({
        listlux: data
      })
    });
    api.requestCosSort('补水').then(data => {
      this.setState({
        listcos: data
      })
    })
  }
  //衣服
  kindClo = (e) => {
    this.setState({
      num: parseInt(e.currentTarget.getAttribute('index'), 10)
    })
    this.val = e.target.innerText
    api.requestCloSort(this.val).then(data => {
      this.setState({
        listclo: data
      })
    })
  };
  //奢侈品
  kindLux = (e) => {
    this.setState({
      num: parseInt(e.currentTarget.getAttribute('index'), 10)
    });
    this.val = e.target.innerText;
    api.requestLuxSort(this.val).then(data => {
      this.setState({
        listlux: data
      })
    })
  };
  //护肤品
  btnkind = (e) => {
    this.setState({
      num: parseInt(e.currentTarget.getAttribute('index'), 10)
    });
    this.val = e.target.innerText;
    api.requestCosSort(this.val).then(data => {
      this.setState({
        listcos: data
      })
    })
  };
  chooseTab(e) {
    if (e !== this.state.type) {
      this.setState({
        changeType: e,
      })
    }
  }

  contentTab() {
    if (this.state.changeType === 'clo') {
      let numArr = [];
      for(let i = 0; i < this.state.Clolist.length; i++) {
        numArr.push(
        <li key={i} className={this.state.num === i ? 'active' : ''} index={i} onClick={(e) => {
          this.kindClo(e)
        }}>
         { this.state.Clolist[i] }
        </li>);
      }
      return (
        <div className="kindContent">
          <div className="kindBarbox">
            <ul className="kindBar">
             { numArr }
            </ul>
          </div>
          <ul className="kindList">
            {
              this.state.listclo.map((item, index) => {
                return (
                  <Link to={'/detail/' + item.productId} key={index}>
                    <div className="movegoods">
                      <h4>
                        <img src={item.imgUrl} alt="" />
                      </h4>
                      <p>{item.productName}</p>
                      <span>￥{item.price}.00</span><span className="iconfont icon-shoucang"></span>
                    </div>
                  </Link>)
              })
            }
          </ul>
        </div>
      )
    } else if (this.state.changeType === 'lux') {
      let luxArr = [];
      for(let i = 0; i < this.state.Luxlist.length; i++) {
        luxArr.push(
        <li key={i} className={this.state.num === i ? 'active' : ''} index={i} onClick={(e) => {
          this.kindLux(e)
        }}>
         { this.state.Luxlist[i] }
        </li>);
      }
      return (
        <div className="kindContent">
          <div className="kindBarbox">
            <ul className="kindBar">
              { luxArr }
            </ul>
          </div>
          <ul className="kindList">
            {
              this.state.listlux.map((item, index) => {
                return (
                  <Link to={'/detail/' + item._id} key={index}>
                    <div className="movegoods">
                      <h4>
                        <img src={item.image} alt="" />
                      </h4>
                      <p>{item.title}</p>
                      <span>￥{item.price}.00</span><span className="iconfont icon-shoucang"></span>
                    </div>
                  </Link>)
              })
            }
          </ul>
        </div>
      )
    } else if (this.state.changeType === 'cos') {
      let cosArr = [];
      for(let i = 0; i < this.state.Cosmetics.length; i++) {
        cosArr.push(
        <li key={i} className={this.state.num === i ? 'active' : ''} index={i} onClick={(e) => {
          this.btnkind(e)
        }}>
         { this.state.Cosmetics[i] }
        </li>);
      }
      return (
        <div className="kindContent">
          <div className="kindBarbox">
            <ul className="kindBar">
              { cosArr }
            </ul>
          </div>
          <ul className="kindList">
            {
              this.state.listcos.map((item, index) => {
                return (
                  <Link to={'/detail/' + item.num} key={index}>
                    <div className="movegoods">
                      <h4>
                        <img src={item.myimg} alt="" />
                      </h4>
                      <p>{item.title}</p>
                      <span>￥{item.orange}.00</span><span className="iconfont icon-shoucang"></span>
                    </div>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="content" id="kinB">
        <div className="kindSearchbox">
          <div className="kindSearch">
            <a href="/#/search">
              <i className="iconfont icon-search"></i>
              <p>搜索商品</p>
            </a>
          </div>
        </div>
        <div className="kindBox">
          <ul className="kindNav">
            <li onClick={() => { this.chooseTab("clo") }}>
              <span>{this.state.nav[0]}</span>
            </li>
            <li onClick={() => { this.chooseTab("lux") }}>
              <span>{this.state.nav[1]}</span>
            </li>
            <li onClick={() => { this.chooseTab("cos") }}>
              <span>{this.state.nav[2]}</span>
            </li>
          </ul>
        </div>
        {this.contentTab()}
      </div>
    )
  }
}

export default Com
