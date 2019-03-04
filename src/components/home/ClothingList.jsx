import React from 'react';
import { Link } from 'react-router-dom';

import './ListS.scss';


const ClothingList =({list}) => {
  return (
    <div className="move">
      <ul className="moveList">
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

export default ClothingList
