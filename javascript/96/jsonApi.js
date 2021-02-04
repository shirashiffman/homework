const http = require('http');
const fs = require('fs');
const url = require('url');

function parseTime(time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }

function unixTime (time) {
    return {unixtime: time.getTime()}
}
  

http.createServer((req, res)=>{
    url = url.parse(req.url, true);
    const iso = url.query.iso;
    console.log(iso);
    // res.writeHead(200, { 'Content-Type': 'application/json' })

    switch(url.pathname) {
        case '/api/parsetime':
           res.end(JSON.stringify(parseTime(new Date(url.query.iso))))
          break;
        case '/api/unixtime':
            res.end(unixTime(new Date(url.query.iso)))
          
            break;
    }
}).listen(process.argv[2])