import axios from 'axios'
export default (req: any, res: any) => {
    const api = req.query.api;
    axios.get(`${api}`)
        .then(response => {
            // レスポンスのデータとステータスを出力
            console.log(response.data);
            console.log(response.status);
        });
};
