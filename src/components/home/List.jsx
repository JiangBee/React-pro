import React from 'react';
import {Link} from 'react-router-dom';
import './listStyle.scss';

class List extends React.Component{
  render () {
    return (
      <ul className="movieList">
        {
          this.props.list.map( (item, index) => {
            return  (
              <Link to={'/detail/'+item.productId} key={item.productId}>
                <div className="goodsimg">
                  <h4><img src={item.imgUrl} alt={index}/></h4>
                  <p>{item.productName}&nbsp;·&nbsp;{item.brand}</p>
                  <span className="fa fa-cny">&nbsp;{item.price}&nbsp;</span><span className="fa fa-heart-o"></span>
                </div>
              </Link>
            )
          })

        }
      </ul>
    )
  }
}

// const List = ({list}) => {
//   console.log(list);
//   return (
//     <ul className="movieList">
//       {
//         list.map( (item, index) => {
//           return  (
//             <Link to={'/detail/' + item.productId} key={item.id}>
//               <div className="goodsimg">
//                 <h4><img src={item.imgurl} alt={index}/></h4>
//                 <p>{item.productName}&nbsp;ยท&nbsp;{item.brand}</p>
//                 <span className="fa fa-cny">&nbsp;{item.price}&nbsp;</span><span className="fa fa-heart-o"></span>
//               </div>
//             </Link>
//           )
//         })
//       }
//     </ul>
//   )
// }
export default List
