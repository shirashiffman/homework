window.myApp = window.myApp || {};

window.myApp.Utils = (function (Utils) {
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

  Utils.getDayName = (dayIndex) => days[dayIndex - 1];
  Utils.getDayIndex = function (dayName) {
    return (
      days.findIndex((day) => dayName.toLowerCase() === day.toLowerCase()) + 1
    );
  };
  return Utils;
}(window.myApp.Utils || {}));
