var express = require('express');
var router = express.Router();
var pg = require('pg');
//DBからデータを取得するだけ
router.get('/', function (req, res, next) {
    var pool = pg.Pool({
        database: 'schedule',
        user: 'postgres', //ユーザー名はデフォルト以外を利用している人は適宜変更してください。
        password: 'postgres', //PASSWORDにはPostgreSQLをインストールした際に設定したパスワードを記述。
        host: 'localhost',
        port: 5432,
    });
    pool.connect(function (err, client) {
        if (err) {
            console.log(err);
        } else {
            client.query('SELECT content FROM schedule', function (err, result) {
                res.render('database', {
                    title: 'GETメソッド',
                    datas: result.rows[0].content,
                });
                console.log(result); //コンソール上での確認用なため、この1文は必須ではない。
            });
        }
    });
});

module.exports = router;