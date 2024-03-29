(function () {
  "use strict";

  function getElemId(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let letters = ["w", "e", "l", "c", "o", "m", "e2", "!"];
  let elemLetters = [];
  for (let i = 0; i < letters.length; i++) {
    elemLetters.push(getElemId(letters[i]));
  }

  let divs = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let elemDivs = [];
  for (let i = 0; i < divs.length; i++) {
    elemDivs.push(getElemId(divs[i]));
  }

  function changeColors() {
    for (let i = 0; i < elemLetters.length; i++) {
      setCss(elemLetters[i], "color", getRandomColor());
    }
    for (let i = 0; i < divs.length; i++) {
      setCss(elemDivs[i], "backgroundColor", getRandomColor());
    }
  }

  const theButton = getElemId("button");
  let intervalId;

  theButton.addEventListener("click", () => {
    changeColors();
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      theButton.innerHTML = "Start";
    } else {
      intervalId = setInterval(changeColors, 500);

      theButton.innerHTML = "Stop";
    }
  });

  const resetButton = getElemId("resetButton");
  resetButton.addEventListener("click", () => {
    for (let i = 0; i < elemLetters.length; i++) {
      setCss(elemLetters[i], "color", "black");
    }
    for (let i = 0; i < divs.length; i++) {
      setCss(elemDivs[i], "backgroundColor", "transparent");
    }

    clearInterval(intervalId);
    intervalId = null;
    theButton.innerHTML = "Start";
  });
})();
