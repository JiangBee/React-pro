import axios from 'axios'
import url from '@/api'

const api = {
 
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
  //护肤
  requestCosSort (val) {
    return new Promise((resolve, reject) => {
      axios.get(url.cosmeticsUrl + '/product/keyword?title=' + val)
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //衣服
  requestCloSort (val) {
    return new Promise((resolve, reject) => {
      axios.get(url.clothingUrl + '/product/search?brand=' + val)
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  //奢侈品
  requestLuxSort (val) {
    return new Promise((resolve, reject) => {
      axios.get(url.luxuryUrl + '/product/search?brand=' + val)
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
