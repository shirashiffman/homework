"use strict";

function ourMap(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

function toLower(a) {
  return a.toLowerCase();
}

const array1 = [2, 4, 6];
console.log("Doubled", array1, "=>", ourMap(array1, double));
console.log("Squared", array1, "=>", ourMap(array1, square));

const array2 = ["A", "b", "C"];
console.log("Lower Case", array2, "=>", ourMap(array2, toLower));
