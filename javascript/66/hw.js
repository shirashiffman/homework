/*global $*/
(function () {
  "use strict";
  const radios = $("input[type = 'radio']");
  //console.log(radios);
  const name = $("#recipeName");
  const image = $("#image");
  const ingredients = $("#ingredients");

  for (let i = 0; i < radios.length; i++) {
    const x = $(`#${radios[i].id}`);
    x.click(function () {
      //console.log(radios[i].id);
      fetch("recipes.json")
        .then((r) => r.json())
        .then((json) => {
          name.text(json[this.id].recipeName);
          image.attr("src", json[this.id].image);
          ingredients.empty();
          let array = json[this.id].ingredients;
          array.forEach((element) => {
            ingredients.append(element);
            ingredients.append("<br></br>");
          });
        })
        .catch();
    });
  }

  // $('input[name=recipe]:checked').val()
})();
