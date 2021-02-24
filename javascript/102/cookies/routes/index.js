var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.cookies['username']){
    res.redirect('/user')
  }
  // res.cookie('count', 0)
  res.render('index', { title: 'Welcome', username: req.cookies['username'], count: req.cookies['count'] || 1 });
});

router.route('/user')
 .get(function(req, res, next){
    res.render('user', {})
  })
  .post(function(req, res, next){
    res.cookie('username', req.body.username)
    res.redirect('/')
  })
module.exports = router;
