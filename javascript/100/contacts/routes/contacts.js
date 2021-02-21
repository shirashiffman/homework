var debug = require('debug')('contacts:route');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  db.query('SELECT * FROM contacts', (error, results, fields) => {
    if (error) {
      return next(`Unable to fetch contacts ${error.message}`);
    }

    debug(`get returning ${JSON.stringify(results)}`);

    res.render('layout', {
      title: 'Contacts',
      contacts: results,
      noContacts: !results.length,
      partials: { content: 'contacts' }
    });
  });


});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'contact' }
  });
});

router.post('/addContact', function (req, res, next) {


  db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (error, results, fields) => {
      if (error) {
        return next(new Error(`Unable to insert contact - ${error.message}`));
      }

      res.redirect('/contacts');
    });
});

router.get('/deleteContact/:id', function (req, res, next) {

  db.query('DELETE FROM contacts WHERE id = ?', [req.params.id],
    (error, results, fields) => {
      debug(results);

      if (error) {
        return next(new Error(`Unable to delete contact ${req.params.id} - ${error.message}`));
      }

      if (!results.affectedRows) {
        return next(new Error(`Unable to delete contact ${req.params.id} - not found`));
      }

      res.redirect('/contacts');
    });
});

router.get('/editContact/:id', function (req, res, next) {
  

  db.query('SELECT * FROM contacts WHERE id = ? LIMIT 1 ',
    [req.params.id],
    (error, results, fields) => {
      debug(results);

      if (error) {
        return next(new Error(`Unable to update contact ${req.params.id} ${error.message}`));
      }

      if (!results.length) {
        return next(new Error(`Unable to update contact ${req.params.id} - not found`));
      }

      res.render('layout', {
        title: 'Edit Contact',
        contact: results[0],
        partials: { content: 'contact' }
      });
    });
});

router.post('/editContact/:id', function (req, res, next) {
 
  db.query('UPDATE contacts SET firstName = ?, lastName = ?, email = ? , phone = ? WHERE id = ?',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id],
    (error, results, fields) => {
      debug(results);

      if (error) {
        return next(new Error(`Unable to update contact - ${error.message}`));
      }

      if (!results.affectedRows) {
        return next(new Error(`Unable to update contact ${req.params.id} - not found`));
      }

      res.redirect('/contacts');
    });
});

module.exports = router;
