import axios from 'axios'

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.42.118:3000/api/product')
        .then(data => {
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestBannerData () {
    return new Promise ((resolve, reject) => {
      axios.get( 'http://47.102.124.49:3000/api/slideshow')
      .then(data => {
        // console.log(data.data.data);
        resolve(data.data.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  requestClothingData () {
    return new Promise((resolve, reject) => {
      axios.get('http://39.105.39.134:3000/api/product')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  requestLuxuryData () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.124.49:3000/api/product')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  requestClothingList () {
    return new Promise((resolve, reject) => {
      axios.get('http://39.105.39.134:3000/api/product?pageCode=2&pageNumber=40')
        .then(data => {
          resolve(data.data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  }
};


export default api
