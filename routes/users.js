var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/menu', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'menu.html'));
});

module.exports = router;
