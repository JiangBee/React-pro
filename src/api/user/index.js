import axios from 'axios';
// import baseUrl from '@/api'
const api = {
  requestData (obj) {
    return new Promise((resolve, reject) => {
      axios.post('https://www.daxunxun.com/users/login', obj)
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestRegister (obj) {
    return new Promise((resolve, reject) => {
      axios.post('https://www.daxunxun.com/users/register', obj)
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

}

export default api
