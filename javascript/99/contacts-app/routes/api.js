var express = require('express');
var router = express.Router();


router.get('/contacts', function(req, res, next) {
    //res.send('respond with a resource');
    res.json(contacts)
  });