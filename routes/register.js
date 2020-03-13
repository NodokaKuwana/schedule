var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


/*post*/
router.post('/', function (req, res) {
  console.log(req.body.test);
  content = req.body.content;
  res.send('Request is sended.');
})

module.exports = router;
