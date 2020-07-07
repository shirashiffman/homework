"use strict";

function multiply(a, b) {
  return a * b;
}

console.log("multiply(4,6)", multiply(4, 6));
console.log("multiply(2, 8)", multiply(2, 8));
console.log("multiply(14, 3)", multiply(14, 3));

function getMultiply() {
  return multiply;
}

let getMultiplyer = getMultiply();
console.log("getMultiplyer(4,6)", getMultiplyer(4, 6));
console.log("getMultiplyer(2, 8)", getMultiplyer(2, 8));
console.log("getMultiplyer(14, 3)", getMultiplyer(14, 3));

function multiplyBy(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyByFive = multiplyBy(5);
const multiplyBySix = multiplyBy(6);
const multiplyByTen = multiplyBy(10);

console.log("multiplyByFive(2)", multiplyByFive(2));
console.log("multiplyBySix(2)", multiplyBySix(2));
console.log("multiplyByTen(2)", multiplyByTen(2));
