import React from 'react';
import Back from '@/components/back/back.jsx';
import apiCookie from '@/api/goods/Cookie.js';
import '@/scss/cartStyle.scss';
class Com extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      goodlist: []
    }
  }
  componentDidMount() {
    let goodlist = JSON.parse(apiCookie.getCookie('goodlist'));
    this.setState({
      goodlist: goodlist
    });
    console.log(goodlist);
    let content =Array.from(document.getElementsByClassName('cart'))[0];
    console.log(content);
    // var html ='';
    // goodlist.forEach(item => {
    //    html  =`
    //   <li>
    //     <div class="cartleft">
    //       <input type="checkbox" class="choose"/>
    //       <p>
    //         <img src="${item.imgUrl}" />
    //       </p>
    //     </div>
    //     <div class="cartright">
    //       <h3>${item.productName}</h3>
    //       <div>
    //         <p>￥:${item.price}</p>
    //         <div class="right">
    //           <button>-</button><input type="text" value="${item.count}"/><button>+</button><button class="fa fa-trash-o"></button>
    //         </div>
    //       </div>
    //     </div>
    //   </li>
    //   `;
    //   content.appendChild(html);
    // });
    // content.appendChild(html);
  }

  render () {
    let html =[];
    this.state.goodlist.map((item, index) => {
      html.push(
        <li>
          <div className="cartleft" key={index}>
            <input type="checkbox" className="choose"/>
            <p>
              <img src={item.imgUrl} alt="index"/>
            </p>
          </div>
          <div className="cartright">
            <h3>{item.productName}</h3>
            <div>
              <p>￥:{item.price}</p>
              <div className="right">
                <button>-</button><input type="text" value={item.count}/><button>+</button><button className="fa fa-trash-o"></button>
              </div>
            </div>
          </div>
        </li>
      )
    })
    return (
      <div className="box">
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
        <footer className="footer"></footer>
      </div>
    )
  }
}

export default Com
