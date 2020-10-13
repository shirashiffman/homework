/*global $*/
(function () {
  "use strict";

  const picContainerElem = $("#picContainer");
  const carousel = $("#carousel");
  //carousel.hide();
  picContainerElem.hide();

  $("#searchButton").click(function () {
    picContainerElem.empty();
    let searchVal = $("#searchBox").val();
    picContainerElem.show();
    $.getJSON(
      `https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchVal}&format=json&jsoncallback=?`,
      function (data) {
        $("#modal").hide();

        let picArray = data.items;
        picArray.forEach((imgObject) => {
          $(`<div ><img src=${imgObject.media.m}></div>`)
            .appendTo(picContainerElem)
            .append($(`<span class="pictureTitle">${imgObject.title}</span>`));
          console.log(imgObject);
        });
        const rightArrow = $("#rightArrow");
        const leftArrow = $("#leftArrow");
        let sourceIndex = 0;
        console.log("clicked");
        document.getElementById(
          "carousel"
        ).style.backgroundImage = `url(${picArray[sourceIndex].media.m})`;

        rightArrow.click(function () {
          if (sourceIndex === picArray.length - 1) {
            sourceIndex = -1;
          }

          document.getElementById("carousel").style.backgroundImage = `url(${
            picArray[++sourceIndex].media.m
          })`;
        });
        leftArrow.click(function () {
          if (sourceIndex === 0) {
            sourceIndex = picArray.length;
          }
          document.getElementById("carousel").style.backgroundImage = `url(${
            picArray[--sourceIndex].media.m
          })`;
        });
      }
    );
  });
})();
