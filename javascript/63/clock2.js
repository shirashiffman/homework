window.clock = function clock(color) {
  "use strict";

  const div = document.createElement("div");
  const span = document.createElement("span");
  document.body.appendChild(div);
  div.appendChild(span);
  span.style.backgroundColor = color;

  function setTime() {
    let d = new Date();
    // let h = d.getHours();
    // let m = d.getMinutes();
    // let s = d.getSeconds();
    //let time = `${h}:${m}:${s}`;
    let time = d.toLocaleTimeString();

    span.innerHTML = time;
  }
  setInterval(setTime, 1000);

  return this;
};
