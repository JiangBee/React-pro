import React from 'react';
import {Route} from 'react-router-dom';
import Detail from '@/pages/Detail.jsx';

class Com extends React.Component {
  render () {
    return (
      <div className="box">
        <Route path="/detail/:id" component = {Detail}/>
      </div>
    )
  }
}
export default Com
