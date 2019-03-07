import React from 'react';
import '@/scss/orderStyle.scss';
import Back from '@/components/back/back.jsx';
import { Toast } from 'antd-mobile';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shopping: [],
      sumprice: ''
    }
  }
  componentDidMount() {
    // console.log(JSON.parse(window.localStorage.getItem('shopping')));
    // console.log(JSON.parse(window.localStorage.getItem('sumprice')));
    this.setState({
      shopping: JSON.parse(window.localStorage.getItem('shopping')),
      sumprice: JSON.parse(window.localStorage.getItem('sumprice'))
    })
  }

  //
  showMessage = () => {
    Toast.info('订单提交成功！', 1);
    // console.log(this)
    this.props.history.push("/home")
  };
  render () {
    let html = [];
    this.state.shopping.map((item,index) => {
      html.push(
        <li key={item.productId}>
          <p className="img"><img src={item.imgUrl} alt={item.productId}/></p>
          <div>
            <span className="productname">{item.productName}</span>
            <p className="goodsinfo">
              <span className="count">x{item.count}</span>
              <span className="fa fa-cny money">:{item.price}</span>
            </p>
          </div>
        </li>
      );
      return ''
    });
    return (
      <div className="content ordercontent">
        <header className="header orderheader">
          <Back props = {this.props}></Back>
          <span style={{fontSize:16,color:"black"}}>确认订单</span>
          <span></span>
        </header>
        <div className="center">
          <p className="address">
            <span className="fa fa-map-marker fa-lg">请确认收货地址</span>
            <span className="fa fa-angle-right fa-2x"></span>
          </p>
          <div className="pay">
            <ul>
              <li>
                <span>支付方式</span>
                <span>在线支付</span>
              </li>
              <li>
                <span>配送方式</span>
                <span>普通快递</span>
              </li>
              <li>
                <span>送货时间</span>
                <span>仅周一至周五送货</span>
              </li>
            </ul>
          </div>
          <div className="goods">
            <ul>
              {html}
            </ul>
            <h3>总计&nbsp;<span className="fa fa-yen"></span>:{this.state.sumprice}</h3>
          </div>
          <div className="costless">
            <ul>
              <li>
                <span>优惠券</span>
                <span>-￥50.00</span>
              </li>
              <li>
                <span>有货币</span>
                <span><input type="checkbox"/></span>
              </li>
              <li>
                <span>发票</span>
                <span><input type="checkbox"/></span>
              </li>
              <li>
                <span>不打印价格</span>
                <span><input type="checkbox"/></span>
              </li>
            </ul>
          </div>
          <div className="costmoney">
            <ul>
              <li>
                <span>优惠券</span>
                <span>-￥50.00</span>
              </li>
              <li>
                <span>运费</span>
                <span>+￥0.00</span>
              </li>
              <li>
                <span>商品金额</span>
                <span>￥{this.state.sumprice}</span>
              </li>
              <li>
                <span style={{fontWeight:"bold"}}>实付金额</span>
                <span style={{fontWeight:"bold"}}>￥{this.state.sumprice-50}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="orderbottom">
          <span>您需要支付:￥:{this.state.sumprice-50}</span>
          <button onClick={
            () => {
              this.showMessage()
            }
          }>提交订单
          </button>
        </div>
      </div>
    )
  }
}
export default Com

