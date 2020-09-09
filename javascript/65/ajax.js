(function () {
  "use strict";

  let fileName = "";
  let p = $("#p");

  const button = $("#submit");
  button.click((fileName) => {
    p.text("Loading...");
    fileName = document.getElementById("file").value;
    fetch(fileName)
      .then((response) => response.text())
      .then((result) => {
        p.text(result);
      })
      .catch(() => p.text("Error- File could not be loaded")); //pcs.messageBox.show(error));

    document.getElementById("file").value = "";
  });
})();
