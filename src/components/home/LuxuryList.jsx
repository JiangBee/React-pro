import React from 'react';
import { Link } from 'react-router-dom';

import './ListS.scss';


const LuxuryList =({list}) => {
  return (
    <div className="move">
      <ul className="moveList">
      {
        list.map((item, index) => {
          return (
          <Link to = { '/detail/' + item._id } key = { index }>
            <div className="movegoods">
              <h4>
                <img src = { item.image } alt={index}/>
              </h4>
              <p>{ item.watchname }</p>
              <span>￥{ item.price }.00</span><span className="iconfont icon-shoucang"></span>
            </div>
          </Link>)
        })
      }
      </ul>
    </div>
  )
}

export default LuxuryList
