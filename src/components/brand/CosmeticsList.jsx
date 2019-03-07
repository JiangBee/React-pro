import React from 'react';
import { Link } from 'react-router-dom';

import './recommed.scss';

const CosmeticsList =({list}) => {
  return (
    <div className="brandmove">
      <ul className="brandmoveList">
      {
        list.map((item, index) => {
          return (
          <Link to = { '/detail/' + item.num } key = { index }>
            <div className="brandmovegoods">
              <h4>
                <img src = { item.myimg } alt={index}/>
              </h4>
              <p>{ item.title }</p>
              <span>￥{ item.orange }.00</span><span className="iconfont icon-shoucang"></span>
            </div>
          </Link>)
        })
      }
      </ul>
    </div>
  )
};

export default CosmeticsList
