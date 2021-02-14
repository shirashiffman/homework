var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contacts' });
});

module.exports = router;
