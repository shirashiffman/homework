const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const str = buffer.toString();
const array = str.split('\n');
console.log(array.length - 1);