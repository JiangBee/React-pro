import React from 'react';
import {Switch, Route} from 'react-router-dom';
import  Cart from '@/pages/Cart.jsx';

class CartApp extends React.Component{
  render () {
    return (
      <div className="box">
        <Switch>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </div>
    )
  }
}
export default CartApp
