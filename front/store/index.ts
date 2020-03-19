import axios from 'axios'
export const actions = {
    api() {
        console.log('api called')
        const api = 'https://zip-cloud.appspot.com/api/search?zipcode=7830060';
        // ローカルのドメイン取得
        const baseUrl = `${location.protocol}//${location.host}`;

        // クロスドメイン問題のため、serverMiddlewareからapiを叩く
        axios.get(`${baseUrl}/server-middleware-api?api=${api}`);
    },
    ok(){
        console.log("OK")
    }
}