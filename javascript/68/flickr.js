/*global $*/
(function () {
  "use strict";

  const picContainerElem = $("#picContainer");
  picContainerElem.hide();

  $("#searchButton").click(function () {
    let searchVal = $("#searchBox").val();
    picContainerElem.show();
    $.getJSON(
      `https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchVal}&format=json&jsoncallback=?`,
      function (data) {
        $("#modal").hide();

        let picArray = data.items;
        picArray.forEach((imgObject) => {
          $(`<div ><img src=${imgObject.media.m}></div>`).appendTo(
            picContainerElem
          );
          //console.log(imgObject);
        });
      }
    );
  });
})();
