var express = require('express');
var router = express.Router();
var pg = require('pg');

/*post*/
router.post('/', function (req, res) {

  //リクエストからデータを取り出す
  date = req.body.year + '-' + req.body.month + '-' + req.body.day;
  console.log(date)
  time = req.body.hour + req.body.minute;
  content = req.body.content;
  id = date.slice(2, 10).replace(/-/g, '') + time.replace(/:/g, '');

  console.log(date + '  ' + time + '  ' + content)
  //DBに接続
  var pool = pg.Pool({
    database: 'schedule',
    user: 'postgres', //ユーザー名はデフォルト以外を利用している人は適宜変更してください。
    password: 'postgres', //PASSWORDにはPostgreSQLをインストールした際に設定したパスワードを記述。
    host: 'localhost',
    port: 5432,
  });

  //DBに登録
  pool.connect(function (err, client) {
    try {
      console.log(req)
      client.query(`INSERT INTO schedule values (gen_random_uuid(),'${id}','${date}','${time}','${content}')`)
    } catch (err) {
      console.log(err);
    }
  });
  pool.end();
  res.send('Request is sended.');
})

module.exports = router;
