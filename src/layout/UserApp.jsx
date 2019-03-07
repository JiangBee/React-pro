import React from 'react';
import { Switch } from 'react-router-dom';


class Com extends React.Component{
  render () {
    return (
      <div className="box">
        <header className="header"></header>
        <Switch>
          {/*<Route path="/userapp/register" component = {Register}></Route>*/}
          {/*<Route path="/userapp/login" component = {Login}></Route>*/}
        </Switch>
      </div>
    )
  }
}
export default Com
