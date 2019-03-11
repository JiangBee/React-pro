import React, { Component } from 'react'
import api from '@/api/home/index.js';
import Header from '@/components/home/Header.jsx';
import { Carousel } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import CosmeticsList from '@/components/home/CosmeticsList.jsx';
import ClothingList from '@/components/home/ClothingList.jsx';
import LuxuryList from '@/components/home/LuxuryList.jsx';
import Nav from '@/components/home/Nav.jsx';
import Title from '@/components/home/Title.jsx';
import List from '@/components/home/List.jsx';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      bannerdata: [],
      imgHeight: 200,
      title: [{'tlt': '丽人专区', 'url': '/division/cosmetics'}, {'tlt': '服装专区', 'url': '/division/clothing'}, {'tlt': '轻奢专区', 'url': '/division/luxury'}],
      cosmeticsList: [],
      clothingList: [],
      luxuryList: []
    }
  }

  componentDidMount () {
    api.requestData().then(data => {
      this.setState({
        cosmeticsList: data
      })
    });
    api.requestBannerData().then(data => {
      // console.log(data);
      this.setState({
        bannerdata: data
      })
    });
    api.requestClothingData().then(data => {
      this.setState({
        clothingList: data
      })
    });
    api.requestLuxuryData().then(data => {
      this.setState({
        luxuryList: data
      })
    });
    api.requestClothingList().then(data => {
      this.setState({
        list: data
      })
    })
  }

  render () {
    return (
      <div className="box">
        <Header/>
        <div className = "content">
        <Carousel
            autoplay={ true }
            infinite
            dots = { true }
          >
            {this.state.bannerdata.map((item, index) => (
              <a
                key={index}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top'}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
          <Nav/>
          <div className="ad">
            <img src="http://img10.static.yhbimg.com/yhb-img01/2019/02/27/16/01e3b736d28b8a8c71e1b240e739098ac0.jpg?imageView2/3/w/640/h/200/q/60" alt=""/>
          </div>
          <div className="ad">
            <img src="http://img10.static.yhbimg.com/yhb-img01/2019/02/27/16/01ec26668937d62daad711a60eebba15d3.jpg?imageView2/3/w/640/h/200/q/60" alt=""/>
          </div>
          <Title title= { this.state.title[2] }/>
          <LuxuryList list = { this.state.luxuryList }/>
          <Title title= { this.state.title[1] }/>
          <ClothingList list = { this.state.clothingList }/>
          <Title title= { this.state.title[0] }/>
          <CosmeticsList list = { this.state.cosmeticsList }/>
          <List list = { this.state.list }/>
        </div>
      </div>
    )
  }
}

export default Com
