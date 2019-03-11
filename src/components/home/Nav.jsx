import React, { Component } from 'react'
import './Nav.scss';
import {Link} from 'react-router-dom';
class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      navlist: [
        {tlt: '丽人优选', imgs: 'http://img.lizi.com/lizi/store/554b07acf31ef04978652554/179904b8cb2a1.jpg!wh250',url:"/division/cosmetics"},
        {tlt: '人气搭配', imgs: 'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/011004f5a04caaf9c18d7848049a75981e.png?imageView2/2/w/98/h/98/q/60',url:"/division/clothing"},
        {tlt: '轻奢酷炫', imgs: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1063798557.jpg',url:"/division/luxury"},
        {tlt: '全部分类', imgs: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01b097e06ac9fc78bbcc3d3e0dfbe01fcc.png?imageView2/2/w/98/h/98/q/60',url:"/kind"}
        ]
    }
  }
  render () {
    return (
      <nav>
        <ul className="nav">
          {
            this.state.navlist.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>
                    <img src={item.imgs} alt=""/>
                  </Link>
                  <span>{ item.tlt }</span>
                </li>
              )
            })
          }

        </ul>
      </nav>
    )
  }
}

export default Nav
