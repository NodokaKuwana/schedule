var express = require('express');
var router = express.Router();
var pg = require('pg');

/*post*/
router.post('/', function (req, res) {
  //リクエストからデータを取り出す
  date = req.body.year + '-' + req.body.month + '-' + req.body.day;
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
      console.log(id)
      client.query(`INSERT INTO schedule values ('${id}','${date}','${time}','${content}')`)
      // , function (err, result) {
      //     if (result.rows.length !== 0) {
      //         data = result.rows[0].content
      //     } else {
      //         data = '予定がありません'
      //     }
      //     res.render('database', {
      //         title: 'GETメソッド',
      //         datas: data,
      //     });
      // });
    } catch (err) {
      console.log(err);
    }
  });
  res.send('Request is sended.');
})

module.exports = router;
