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
  let colorsArray = [];

  function changeColors() {
    for (let i = 0; i < elemLetters.length; i++) {
      setCss(elemLetters[i], "color", getRandomColor());
    }

    for (let i = 0; i < divs.length; i++) {
      divColors[i] = getRandomColor();
      setCss(elemDivs[i], "backgroundColor", divColors[i]);
    }
    colorsArray.push(divColors);
    addLine();
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
    let table = getElemId("colorTable");
    for (let p = table.rows.length - 1; p > 0; p--) {
      table.deleteRow(p);
    }

    clearInterval(intervalId);
    intervalId = null;
    theButton.innerHTML = "Start";
  });
  //let counter = 0;
  function addLine() {
    //const index = counter++;
    const newRow = getElemId("colorTable").insertRow();

    newRow.addEventListener("click", () => {
      // for (let i = 0; i < divs.length; i++) {
      //   divColors[i] = getRandomColor();
      //   setCss(elemDivs[i], "backgroundColor", colorsArray[index][i]);
      // }
      setCss(elemDivs[0], "backgroundColor", cell1.innerHTML);
      setCss(elemDivs[1], "backgroundColor", cell2.innerHTML);
      setCss(elemDivs[2], "backgroundColor", cell3.innerHTML);
      setCss(elemDivs[3], "backgroundColor", cell4.innerHTML);
      setCss(elemDivs[4], "backgroundColor", cell5.innerHTML);
      setCss(elemDivs[5], "backgroundColor", cell6.innerHTML);
      setCss(elemDivs[6], "backgroundColor", cell7.innerHTML);
      setCss(elemDivs[7], "backgroundColor", cell8.innerHTML);

      clearInterval(intervalId);
      intervalId = null;
      theButton.innerHTML = "Start";
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
    cell1.innerHTML = divColors[0];
    cell2.innerHTML = divColors[1];
    cell3.innerHTML = divColors[2];
    cell4.innerHTML = divColors[3];
    cell5.innerHTML = divColors[4];
    cell6.innerHTML = divColors[5];
    cell7.innerHTML = divColors[6];
    cell8.innerHTML = divColors[7];
  }
})();
