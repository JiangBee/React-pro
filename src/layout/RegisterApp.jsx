import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '@/pages/Register';

class Com extends Component {

    render () {
        return (
            <div className = "box">
               <Switch>
                   <Route path = '/userapp/register' component = { Register } />
               </Switch>
            </div>
        )
    }
}

export default Com
