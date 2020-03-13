var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*post*/
router.post('/', function (req, res) {
  res.send('POST is sended.');
  condole.log(req)
})

module.exports = router;
