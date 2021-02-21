var express = require('express');
var router = express.Router();


noContacts = false

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('layout', 
  {
    noContacts: noContacts,
    partials: {content: 'contacts'},
    contacts: contacts
})
});

router.get('/add', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('layout', 
  {
    noContacts: noContacts,
    partials: {content: 'add'},
    contacts: contacts
})
});


router.post('/add', function(req, res, next) {
  //res.send('respond with a resource');
   contacts.push(req.body);
   res.redirect('/contacts');
});

router.get('/edit/:id', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('layout', 
  {
    noContacts: noContacts,
    partials: {content: 'delete'},
    contact: contacts.filter(contact=> contact.id === +req.params.id)
    
})
})

router.post('/delete/:id', function(req, res, next) {
  //res.send('respond with a resource');
  contacts.filter(contact =>{contact.id !== +req.params.id});
  res.redirect('/contacts');

});
router.post('/edit/:id', function(req, res, next) {
  //res.send('respond with a resource');
  contacts.filter(contact =>{contact.id !== +req.params.id});
  contacts.push(req.body)
  res.redirect('/contacts');

});

router.get('/api', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(contacts)
});


module.exports = router;
