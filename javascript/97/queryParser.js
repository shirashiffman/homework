const url = require('url');

module.exports = (req, res, next) => {
  const parsedUrl = url.parse(req.url, true);
  req.query = parsedUrl.query;
  if(req.query.magicWord !== 'please'){
    res.end('You are not authorized to access this page!');
  }
  else{next();}
 
}