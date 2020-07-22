//dayOftheWeek
const daysOftheWeek = (function () {
  "use strict";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function getDayName(index) {
    return days[index - 1];
  }

  function getDayNumber(name) {
    return (
      days.findIndex(
        (currentValue) => name.toLowerCase() === currentValue.toLowerCase()
      ) + 1
    );
  }

  return {
    getDayName: getDayName,
    getDayNumber: getDayNumber,
  };
})();

console.log(daysOftheWeek.getDayName(4));
console.log(daysOftheWeek.getDayNumber("sunday"));

const interestCalculator = (function () {
  "use strict";

  let rate = 0;
  let years = 0;

  function setRate(newRate) {
    rate = newRate;
  }

  function setYears(newYears) {
    years = newYears;
  }

  function calculateInterest(principle) {
    return principle * (1 + rate * years) - principle;
  }

  return {
    setRate: setRate,
    setYears: setYears,
    calculateInterest: calculateInterest,
  };
})();

interestCalculator.setRate(0.1);
interestCalculator.setYears(2);
console.log(interestCalculator.calculateInterest(100));
