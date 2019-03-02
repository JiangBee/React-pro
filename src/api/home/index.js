import baseUrl from '@/api/index.js';
import axios from 'axios';

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/product')
        .then(data => {
          resolve(data.data.data);
        })
        .catch(err =>{
          reject(err);
        })
    })
  },
  requestHBannerData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl+'/banner')
        .then(data => {
          resolve(data.data)
        })
        .catch( err => {
          reject(err)
        })
    })
  }
};

export  default api
