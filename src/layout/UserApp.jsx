import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Register from '@/pages/Register.jsx';
import Login from '@/pages/Login.jsx';

class Com extends React.Component{
  render () {
    return (
      <div className="box">
        <header className="header"></header>
        <Switch>
          <Route path="/userapp/register" component = {Register}></Route>
          <Route path="/userapp/login" component = {Login}></Route>
        </Switch>
      </div>
    )
  }
}
export default Com
