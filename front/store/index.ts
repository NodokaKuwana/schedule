import axios from 'axios'
export const actions = {
    api() {
        const api = 'https://zip-cloud.appspot.com/api/search?zipcode=7830060'
        // ローカルのドメイン取得
        const baseUrl = `${location.protocol}//${location.host}`

        // クロスドメイン問題のため、serverMiddlewareからapiを叩く
        return axios.get(`${baseUrl}/middleware-api?api=${api}`)
        .then((response) => {
            console.log(response.data.results[0].address1)
            return response.data.results[0].address1
          })
    }
} 