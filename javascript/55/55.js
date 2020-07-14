"use strict";

function ourEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      return false;
    }
  }
  return true;
}

function ourSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return true;
    }
  }
  return false;
}

function isCaps(letter) {
  return letter === letter.toUpperCase();
}

function isLowerCase(letter) {
  return letter === letter.toLowerCase();
}

let letters = ["a", "B", "c"];
let letters1 = ["A", "B", "C"];
let letters2 = ["a", "b", "c"];

//test Every
console.log(letters, "All Upper?", ourEvery(letters, isCaps));
console.log(letters1, "All Upper?", ourEvery(letters1, isCaps));
console.log(letters2, "All Upper?", ourEvery(letters2, isCaps));

console.log(letters, "All Lower?", ourEvery(letters, isLowerCase));
console.log(letters1, "All Lower?", ourEvery(letters1, isLowerCase));
console.log(letters2, "All Lower?", ourEvery(letters2, isLowerCase));

console.log(letters, "All Upper?", letters.every(isCaps));
console.log(letters1, "All Upper?", letters1.every(isCaps));
console.log(letters2, "All Upper?", letters2.every(isCaps));

console.log(letters, "All Lower?", letters.every(isLowerCase));
console.log(letters1, "All Lower?", letters1.every(isLowerCase));
console.log(letters2, "All Lower?", letters2.every(isLowerCase));

//test Some
console.log(letters, "Some Upper?", ourSome(letters, isCaps));
console.log(letters1, "Some Upper?", ourSome(letters1, isCaps));
console.log(letters2, "Some Upper?", ourSome(letters2, isCaps));

console.log(letters, "Some Lower?", ourSome(letters, isLowerCase));
console.log(letters1, "Some Lower?", ourSome(letters1, isLowerCase));
console.log(letters2, "Some Lower?", ourSome(letters2, isLowerCase));

console.log(letters, "Some Upper?", letters.some(isCaps));
console.log(letters1, "Some Upper?", letters1.some(isCaps));
console.log(letters2, "Some Upper?", letters2.some(isCaps));

console.log(letters, "Some Lower?", letters.some(isLowerCase));
console.log(letters1, "Some Lower?", letters1.some(isLowerCase));
console.log(letters2, "Some Lower?", letters2.some(isLowerCase));

function ourOnlyIf(array, condition, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      newArray.push(callback(array[i]));
    }
  }
  return newArray;
}

function onlyIf(array, condition, callback) {
  array.filter(condition).forEach(callback);
}

let array = [1, 2, 3, 4];

function isEven(number) {
  return number % 2 === 0;
}
function isOdd(number) {
  return number % 2 !== 0;
}

function multiply(number) {
  return number * number;
}

console.log(ourOnlyIf(array, isEven, multiply));
onlyIf(array, isOdd, console.log);
