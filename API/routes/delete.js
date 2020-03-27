var express = require('express');
var router = express.Router();
var pg = require('pg');

//DELETEメソッドで予定の削除
router.delete('/', function (req, res, next) {
  var pool = pg.Pool({
    database: 'schedule',
    user: 'postgres', //ユーザー名はデフォルト以外を利用している人は適宜変更してください。
    password: 'postgres', //PASSWORDにはPostgreSQLをインストールした際に設定したパスワードを記述。
    host: 'localhost',
    port: 5432,
  });
  pool.connect(function (err, client) {
    try {
      if (req.body.uuid != null) {
        console.log(req)
        client.query(`DELETE FROM schedule where uuid='${req.body.uuid}'`, function (err, result) {
          res.send('Request is sended.');
        });
      } else {
        throw Error();
      }
    } catch (err) {
      console.log(err);
    }
  });
  pool.end();
});

module.exports = router;
