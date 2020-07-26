"use strict";

const counterA = window.myCounter.theCounter;

for (let i = 0; i < 10; i++) {
  counterA.increment();
}

const counterB1 = window.myCounter.counterCreator.create();

for (let i = 0; i < 5; i++) {
  counterB1.increment();
}

const counterB2 = window.myCounter.counterCreator.create();

for (let i = 0; i < 15; i++) {
  counterB2.increment();
}

console.log("Counter A:", counterA.getCount());
console.log("Counter B1:", counterB1.getCount());
console.log("Counter B2:", counterB2.getCount());
