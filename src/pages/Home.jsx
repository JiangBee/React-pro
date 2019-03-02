import React from 'react';
import api from '@/api/home/index.js';
// import {Link} from 'react-router-dom';
// import { Carousel, WingBlank } from 'antd-mobile';
import List from '@/components/home/List.jsx';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      bannerdata: []
    }
  }

  //请求数据
  componentDidMount () {
    api.requestData()
      .then(data => {
        this.setState({
          list: data
        })
      });
    api.requestHBannerData()
      .then( data => {
        this.setState({
          bannerdata: data.data
        })
      })
  }

  render () {
    return (
      <div className="content">
          {/*<Carousel className="space-carousel"*/}
                    {/*frameOverflow="visible"*/}
                    {/*cellSpacing={10}*/}
                    {/*slideWidth={0.8}*/}
                    {/*autoplay*/}
                    {/*infinite*/}
                    {/*beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}*/}
                    {/*afterChange={index => this.setState({ slideIndex: index })}*/}
          {/*>*/}
            {/*{this.state.bannerdata.map((item, index) => (*/}
              {/*<a*/}
                {/*key={index}*/}
                {/*href="#"*/}
                {/*style={{*/}
                  {/*display: 'block',*/}
                  {/*position: 'relative',*/}
                  {/*top: this.state.slideIndex === index ? -10 : 0,*/}
                  {/*height: this.state.imgHeight,*/}
                  {/*boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',*/}
                {/*}}*/}
              {/*>*/}
                {/*<img*/}
                  {/*src={item.imgurl}*/}
                  {/*alt=""*/}
                  {/*style={{ width: '100%', verticalAlign: 'top' }}*/}
                  {/*onLoad={() => {*/}
                    {/*// fire window resize event to change height*/}
                    {/*window.dispatchEvent(new Event('resize'));*/}
                    {/*this.setState({ imgHeight: 'auto' });*/}
                  {/*}}*/}
                {/*/>*/}
              {/*</a>*/}
            {/*))}*/}
          {/*</Carousel>*/}
        <List list={ this.state.list }></List>
      </div>
    )
  }
}

export default Com
