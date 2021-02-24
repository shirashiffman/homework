const debug = require('debug')('contacts:index');
var express = require('express');
var router = express.Router();
const pool = require('../pool');

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    pool.query('SELECT * FROM contacts', (error, results, fields) => {
      if (error) {
        //res.statusCode = 500;
        //res.end();
        return res.sendStatus(500);
      }
      res.send(results);
    });
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
      [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }

        //debug(results);
        req.body.id = results.insertId;

        //res.sendStatus(201);
        //debug(req);

        res.status(201)
          .location(`${req.baseUrl}/${req.body.id}`)
          .send(req.body);
      });
  });

router.route('/:id')
  .get((req, res, next) => {
    pool.query('SELECT * FROM contacts WHERE id = ?',
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.length) {
          return res.sendStatus(404);
        }
        res.send(results[0]);
      });
  })
  .delete((req, res, next) => {
    pool.query('DELETE FROM contacts WHERE id = ?',
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        //debug(results);
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }

        res.sendStatus(204);
      });
  })
  .put((req, res, next) => {
    pool.query('UPDATE contacts SET firstName = ?, lastName =?, email =?, phone =? WHERE id = ?',
      [req.params.firstName, req.params.lastName, req.params.email, req.params.phone, req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        //debug(results);
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }

        res.sendStatus(204);
      });
    });

module.exports = router;
