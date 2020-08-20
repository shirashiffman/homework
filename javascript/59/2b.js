// very nice!
window.myCounter = window.myCounter || {};

window.myCounter.counterCreator = (function (counterCreator) {
  "use strict";

  let numOfCounters = 0;

  counterCreator.create = function () {
    numOfCounters++;

    return {
      count: 0,
      increment: function () {
        return this.count++;
      },
      getCount: function () {
        return this.count;
      },
    };
  };

  counterCreator.getNumberOfCounters = () => numOfCounters;

  return counterCreator;
})(window.myCounter.counterCreator || {});
