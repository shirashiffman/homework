let array = process.argv;
let total = 0;
for(let i =2; i< array.length; i++){
    total += (+array[i]);
}
console.log(total);