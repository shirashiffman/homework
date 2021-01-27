const fs = require('fs');


fs.readdir(process.argv[2], (err, list)=>{
    if(err){
        console.error(err)
    }
    list.forEach(file=>{
        let fileNameArray = file.split('.');
        if(fileNameArray[1] === process.argv[3]){
            console.log(file);
        }
    })
})