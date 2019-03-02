import axios from 'axios';
const api = {
  requestDetailData (id) {
    return new Promise( (resolve, reject) => {
      axios.get( "http://www.jiangliubing.top:3000/api/detail?id=" + id)
        .then( data => {
          resolve(data);
        })
        .catch( err => {
          reject(err);
        })
    })
  }
};

export default api;
