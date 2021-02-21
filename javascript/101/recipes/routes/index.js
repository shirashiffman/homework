
var express = require('express');
var router = express.Router();
const pool = require('../pool');

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    pool.query('SELECT name FROM recipes', (error, results, fields) => {
      if (error) {
        //res.statusCode = 500;
        //res.end();
        return res.sendStatus(500);
      }
      res.send(results);
    });
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO recipes(name, category, ingredients) VALUES (?, ?, ?)',
      [req.body.name, req.body.category, req.body.ingredients],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        req.body.id = results.insertId;
        res.status(201)
          .location(`${req.baseUrl}/${req.body.id}`)
          .send(req.body);
      });
  });

router.route('/:id')
  .get((req, res, next) => {
    pool.query('SELECT * FROM recipes WHERE id = ?',
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
    pool.query('DELETE FROM recipes WHERE id = ?',
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }

        res.sendStatus(204);
      });
  });
module.exports = router;
