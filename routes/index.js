var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
bodyParser.urlencoded({ extended: true })
bodyParser.json()

/*post*/
router.post('/', function (req, res) {
  console.log(req.body);
  res.send('POST is sended.');
})

module.exports = router;
