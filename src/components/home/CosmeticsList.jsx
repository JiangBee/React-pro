import React from 'react';
import { Link } from 'react-router-dom';

import './ListS.scss';


const CosmeticsList =({list}) => {
  return (
    <div className="move">
      <ul className="moveList">
      {
        list.map((item, index) => {
          return (
          <Link to = { '/detail/' + item.num } key = { index }>
            <div className="movegoods">
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
}

export default CosmeticsList
