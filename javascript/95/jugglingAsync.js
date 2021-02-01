const http = require('http');
let dataArray = [];
let returnedData = [];
let count = 0;

let urlArray = [process.argv[2], process.argv[3], process.argv[4]];

for(let i =0; i < urlArray.length; i++){
    http.get(urlArray[i], response =>{
        response.setEncoding('utf-8');
        response.on('data', data=>{
            dataArray.push(data);
        });
        response.on('end',()=>{
            let string = dataArray.join("");
            returnedData[i] = string;
            count++;
            print();
        })
    })
}

function print(){
    if(count === 3){
        returnedData.forEach(data =>{
            console.log(data);
        })
    }
    
}

