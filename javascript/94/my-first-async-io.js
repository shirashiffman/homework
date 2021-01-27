const fs = require('fs');




fs.readFile(process.argv[2], 'utf8' , (err, buffer) => {
    if (err) {
      console.error(err)
      return
    }
    const str = buffer.toString();
    const array = str.split('\n');
    console.log(array.length - 1);
  })