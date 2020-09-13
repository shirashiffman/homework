/*global $, pcs*/
(function () {
  "use strict";

  let p = $("#p");
  const spinner = $("#spinner");
  const button = $("#submit");
  button.click(() => {
    //p.text("Loading...");
    let fileName = document.getElementById("file").value;
    fetch(fileName)
      .then((r) => {
        spinner.show();
        if (!r.ok) {
          throw new Error("File Not Found");
        }
        return r.text();
      })
      .then((result) => {
        p.text(result);
      })
      .catch((error) => pcs.messageBox.show(error))
      .finally(() => spinner.hide());

    document.getElementById("file").value = "";
  });
})();
