var express = require('express');
var router = express.Router();
var pg = require('pg');

//GETメソッドで予定取得
router.get('/', function (req, res, next) {
    var pool = pg.Pool({
        database: 'schedule',
        user: 'postgres', //ユーザー名はデフォルト以外を利用している人は適宜変更してください。
        password: 'postgres', //PASSWORDにはPostgreSQLをインストールした際に設定したパスワードを記述。
        host: 'localhost',
        port: 5432,
    });

    pool.connect(function (err, client) {
        try {
            if (req.query.id != null) {
                client.query(`SELECT content FROM schedule where id='${req.query.id}'`, function (err, result) {
                    console.log(result.rows.length)
                    if (result.rows.length !== 0) {
                        data = result.rows[0].content
                    } else {
                        data = '予定がありません'
                    }
                    res.render('database', {
                        title: 'GETメソッド',
                        datas: data,
                    });
                });
            } else {
                client.query(`SELECT uuid,to_char(date, 'yyyy-mm-dd') as date,to_char(time, 'hh:mm') as time,content FROM schedule`, function (err, result) {
                    res.send(result.rows);
                });
            }
        } catch (err) {
            console.log(err);
        }
    });
    pool.end();
});

module.exports = router;