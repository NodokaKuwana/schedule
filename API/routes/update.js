var express = require('express');
var router = express.Router();
var pg = require('pg');

console.log("UPDATE")
/*post*/
router.put('/', function (req, res) {
  //リクエストからデータを取り出す
  const date = req.body.year + '-' + req.body.month + '-' + req.body.day;
  const time = req.body.hour + req.body.minute;
  const content = req.body.content;
  const uuid=req.body.uuid;

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
  let regist = pool.connect(function (err, client) {
    try {
      client.query(`UPDATE schedule SET date='${date}',time='${time}',content='${content}' where uuid='${uuid}'`)
    } catch (err) {
      console.log(err);
    }
  });
  pool.end();
  res.send('Request is sended.');
})

module.exports = router;
