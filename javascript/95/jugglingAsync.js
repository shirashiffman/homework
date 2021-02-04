const bl = require('bl');
const http = require('http');

let returnedData = [];
let count = 0;

let urlArray = [process.argv[2], process.argv[3], process.argv[4]];

for(let i =0; i < urlArray.length; i++){
    getHttp(urlArray[i], i)
   
}

function getHttp(url, i){
    let dataResult = '';
    http.get(url, response =>{
        response.setEncoding('utf-8');
        response.on('data', data=>{
            dataResult += data;
        });
        response.on('end',()=>{
           
            returnedData[i] = dataResult;
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

