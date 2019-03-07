import React from 'react';
import {Switch, Route} from 'react-router-dom';
import  Order from '@/pages/OrderForm.jsx';

class CartApp extends React.Component{
  render () {
    return (
      <div className="box">
        <Switch>
          <Route path="/order" component={ Order }></Route>
        </Switch>
      </div>
    )
  }
}
export default CartApp
