import axios from 'axios';
const api = {
  requestData (url) {
    return new Promise( (resolve, reject) => {
      // "http://47.102.124.49:3000/api/product/distinct"
      axios.get(url)
        .then( data => {
          resolve(data.data);
        })
        .catch( err => {
          reject(err);
        })
    })
  }
};

export default api;
