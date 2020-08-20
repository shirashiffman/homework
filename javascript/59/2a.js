// SL - nice
window.myCounter = window.myCounter || {};

window.myCounter.theCounter = (function (theCounter) {
  "use strict";

  let count = 0;

  theCounter.increment = function () {
    count++;
  };

  theCounter.getCount = function () {
    return count;
  };

  return theCounter;
})(window.myCounter.theCounter || {});
