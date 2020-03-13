var express = require('express');
var router = express.Router();

/*post*/
router.post('/', function (req, res) {
  console.log(req.body.test);
  content = req.body.content;
  res.send('Request is sended.');
})

module.exports = router;
