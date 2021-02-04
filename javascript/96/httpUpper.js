const http = require('http');
const fs = require('fs');
// const map = require('through2-map')
dataString= '';

http.createServer((req, res)=>{
    req.on('data', (chunk)=>{
      dataString = dataString + chunk.toString().toUpperCase();
    })
   req.on('end', ()=>{
     res.write(dataString);
   })

}).listen(process.argv[2])