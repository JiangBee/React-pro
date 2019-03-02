import axios from 'axios';

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.124.49:3000/api/product')
        .then(data => {
          resolve(data.data.data);
        })
        .catch(err =>{
          reject(err);
        })
    })
  },
  requestBrandData () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.124.49:3000/api/product/distinct')
        .then(data => {
          resolve(data.data);
          //  返回值     ["宝玑", "爱彼", "宝珀", "雅典", "格拉苏蒂∙原创", "芝柏", "积家", "伯爵", "亨利慕时", "江诗丹顿"]
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  requestDataPriceUp () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.124.49:3000/api/product/sort?type=price&num=1')
        .then(data => {
          resolve(data.data.data);
          // 返回值  [{,,,,},{,,,,},,,,,]
        })
        .catch( err => {
          reject(err);
        })
    })
  },
  requestDataPriceDown () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.124.49:3000/api/product/sort?type=price&num=1')
        .then(data => {
          resolve(data.data.data);
          // 返回值  [{,,,,},{,,,,},,,,,]
        })
        .catch(err => {
          reject(err);
        })
    })
  },
  requestBrandSearch (brand) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.124.49:3000/api/product/brandSerach?brand=' + brand)
        .then(data => {
          resolve(data.data.data);
          // 返回值  [{,,,,},{,,,,},,,,,]
        })
        .catch(err => {
          reject(err);
        })
    })
  },
  requestDetailData () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.124.49:3000/api/product?pageNumber=50')
        .then(data => {
          resolve(data.data.data);
          // 返回值  [{,,,,},{,,,,},,,,,]
        })
        .catch(err => {
          reject(err);
        })
    })
  }
};

export  default api
