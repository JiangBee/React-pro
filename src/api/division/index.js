import axios from 'axios'
import url from '@/api'

const api = {
  //服装轮播图
  requestBannerClo () {
    return new Promise ((resolve, reject) => {
      axios.get(url.clothingUrl + '/banner')
      .then(data => {
        resolve(data.data.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  //服装列表
  requestClothingList () {
    return new Promise((resolve, reject) => {
      axios.get(url.clothingUrl + '/product?pageCode=2&pageNumber=40')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //服装排序
  requestDataDown (number) {
    return new Promise((resolve, reject) => {
      axios.get(url.clothingUrl + '/product/sort?type=price&num=' + number)
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //奢侈轮播图
  requestLuxuryBanner () {
    return new Promise((resolve, reject) => {
      axios.get(url.luxuryUrl + '/slideshow')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //奢侈列表
  requestLuxuryList () {
    return new Promise((resolve, reject) => {
      axios.get(url.luxuryUrl + '/product?pageCode=1&pageNumber=40')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //奢侈排序
  requestLuxurysortdown (number) {
    return new Promise((resolve, reject) => {
      axios.get(url.luxuryUrl + '/product/sort?type=price&num=' + number)
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
   //护肤轮播图
   requestCosBanner () {
    return new Promise((resolve, reject) => {
      axios.get(url.cosmeticsUrl + '/banner')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //护肤排序
  requestCosDown (number) {
    return new Promise((resolve, reject) => {
      axios.get(url.cosmeticsUrl + '/product/sort?type=orange&num=' + number)
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //护肤列表
  requestCosortList () {
    return new Promise((resolve, reject) => {
      axios.get(url.cosmeticsUrl + '/product?pageCode=1&pageNumber=40')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  }
}


export default api
