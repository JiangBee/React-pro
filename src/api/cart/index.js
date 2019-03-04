import axios from 'axios';

const api = {
  requestGoodsData (id,goodlist) {
    return new Promise((resolve, reject) => {
      axios.post('http://39.105.39.134:3000/api/cart/search',{
        userid: id,
        goodlsit: goodlist
      }).then(data => {
          resolve(data.data.data);
        })
        .catch(err =>{
          reject(err);
        })
    })
  },
  responseGoodsData (id, goodlist) {
    return new Promise((resolve, reject) => {
      axios.post('http://39.105.39.134:3000/api/cart/updateAction',{
        userid: id,
        goodlist: goodlist
      } ).then(data => {
          resolve(data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  }
};

export  default api
