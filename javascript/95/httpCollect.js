const http = require('http');
let dataArray = [];

http.get(process.argv[2], response =>{
    response.setEncoding('utf-8');
    response.on('data', data=>{
        dataArray.push(data);
    });
    response.on('end',()=>{
        let string = dataArray.join("");
        console.log(string.length);
        console.log(string);
    })
})

