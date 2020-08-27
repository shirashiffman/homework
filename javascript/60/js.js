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

  let divColors = [];
  function changeColors() {
    for (let i = 0; i < elemLetters.length; i++) {
      divColors[i] = getRandomColor();
      setCss(elemLetters[i], "color", divColors[i]);
    }

    addLine();
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
      intervalId = setInterval(changeColors, 1000);

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

    for (let y = 1; y <= colorsArray.length; y++) {
      table.deleteRow(y);
    }
  });

  const colorsArray = [];
  const table = getElemId("colorTable");
  function addLine() {
    const newRow = table.insertRow();

    newRow.addEventListener("click", (e) => {
      for (let x = 0; x < 8; x++) {
        setCss(
          elemDivs[x],
          "backgroundColor",
          colorsArray[e.target.parentElement.rowIndex - 1][x]
        );
      }

      console.log(e);
    });
    const timeCell = newRow.insertCell();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();
    const cell4 = newRow.insertCell();
    const cell5 = newRow.insertCell();
    const cell6 = newRow.insertCell();
    const cell7 = newRow.insertCell();
    const cell8 = newRow.insertCell();

    const now = new Date();
    timeCell.innerHTML = now.toLocaleTimeString();

    const colors = [
      divColors[0],
      divColors[1],
      divColors[2],
      divColors[3],
      divColors[4],
      divColors[5],
      divColors[6],
      divColors[7],
    ];
    colorsArray.push(colors);

    cell1.innerHTML = colors[0];
    cell2.innerHTML = colors[1];
    cell3.innerHTML = colors[2];
    cell4.innerHTML = colors[3];
    cell5.innerHTML = colors[4];
    cell6.innerHTML = colors[5];
    cell7.innerHTML = colors[6];
    cell8.innerHTML = colors[7];
  }
})();
