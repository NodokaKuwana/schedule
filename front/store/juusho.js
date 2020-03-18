const axios = require('axios')

const url = 'https://zip-cloud.appspot.com/api/search?zipcode=7830060'

function api() {
  return axios.get(url).then((res) => {
    console.log(res.data)
    return res.data.results[0].address1
  })
}
module.exports = api
