window.pcs = function (id) {
  "use strict";

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
  }
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor(element, lengthOfChange, intervalOfChange) {
    let time = 0;
    if (!intervalOfChange) {
      intervalOfChange = 1000;
    }

    let interval = setInterval(change, intervalOfChange);

    function change() {
      setCss(element, "color", getRandomColor());
      if (time >= lengthOfChange) {
        clearInterval(interval);
        interval = null;
      } else {
        time += intervalOfChange;
      }
    }
  }
  function getData(element, key) {
    return element[key];
  }

  function setData(element, key, value) {
    element.key = value;
  }

  const theElem = get(id);

  return {
    /*setCss: (property, value) => setCss(theElem, property, value),
    getCss: property => getCss(theElem, property),*/
    css: function (property, value) {
      if (arguments.length < 2) {
        // get
        return getCss(theElem, property);
      }
      setCss(theElem, property, value);
      return this;
    },
    click: function (callback) {
      theElem.addEventListener("click", callback);
      return this;
    },
    hide: function () {
      setCss(theElem, "display", "none");
      return this;
    },
    show: function () {
      setCss(theElem, "display", "block");
      return this;
    },
    changeColor: function (lengthOfChange, intervalOfChange) {
      changeColor(theElem, lengthOfChange, intervalOfChange);

      return this;
    },
    data: function (key, value) {
      if (arguments.length < 2) {
        return getData(theElem, key);
      } else {
        setData(theElem, key, value);
        return this;
      }
    },
  };
};
