import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './List.scss';

const List =({list}) => {
  return (
      <div className="listBox">
        <h3>
          <span className="iconfont icon-shangchuanxiangshangjiantou"></span>
          你可能喜欢
        </h3>
        <ul className="homeMovie">
        {
        list.map((item, index) => {
          return (
          <Link to = { '/detail/' + item.productId } key = { index }>
            <div className="movegoods">
              <h4>
                <img src = { item.imgUrl } alt={index}/>
              </h4>
              <p>{ item.productName }</p>
              <span>￥{ item.price }.00</span><span className="iconfont icon-shoucang"></span>
            </div>
          </Link>)
        })
        }
        </ul>
      </div>
  )
}


export default List
