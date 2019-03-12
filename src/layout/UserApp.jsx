import React from 'react';
import {Route} from "react-router-dom";
import { Switch } from 'react-router-dom';
import Collect from '@/pages/Collect.jsx';

class Com extends React.Component{
  render () {
    return (
      <div className="box">
        <Switch>
          {/*<Route path="/userapp/register" component = {Register}></Route>*/}
          <Route path="/userapp/collect" component = {Collect}></Route>
        </Switch>
      </div>
    )
  }
}
export default Com
