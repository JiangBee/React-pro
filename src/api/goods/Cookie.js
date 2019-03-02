const api = {
  setCookie (key, value, days) {
    var now = new Date()
    now.setDate(now.getDate() + days)
    document.cookie = key + ' = ' + value + '; expires=' + now
  },
  getCookie (key) {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=')
      if (arr2[0] === key) {
        return arr2[1]
      }
    }
    return ''
  }
}

export default api
