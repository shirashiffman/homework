/*global $*/
(function () {
  "use strict";

  fetch("videos.json")
    .then((r) => {
      if (!r.ok) {
        throw new Error("File Not Found");
      }
      //console.log(r);
      return r.json();
    })
    .then((videos) => {
      displayVideos(videos);
      videos.forEach((el) => {
        $(`<li><img src="${el.image}"/>${el.song}</li>`)
          .appendTo($("#list"))
          .click(() => {
            $("#videoPlayer").empty();
            $("#videoPlayer").append(
              $(`<video id="theVideo" src="${el.url}" controls></video>`)
            );
            $("#theVideo")[0].play();
          });
      });

      const searchButtonElem = $("#searchButton");
      searchButtonElem.click(() => {
        displayVideos(search(videos, $("#searchBox").val()));
        $("#searchBox").val("");
        if ($("#videoDiv").is(":empty")) {
          $("#videoDiv").text("No Videos Found");
        }
        // console.log(search(videos, $("#searchBox").val()));
      });
    })
    .catch((err) => console.error(err));

  function displayVideos(array) {
    $("#videoDiv").empty();
    for (let i = 0; i < array.length; i++) {
      $(
        `<div  class="videoDivElement">
           
        <video controls poster="${array[i].image}">
        <source src="${array[i].url}" type="video/mp4">
        
      </video> 
          <h2 class="text-center">${array[i].song}</h2>
          <h3 class="text-muted text-center">${array[i].artist}</h3>
          </div>`
      ).appendTo($("#videoDiv"));

      //console.log($(array[i].url));
    }
  }

  function search(objectArray, key) {
    //let valid = false;
    let newArray = [];

    objectArray.forEach((object) => {
      let a = Object.values(object);
      for (let i = 0; i < a.length; i++) {
        if (a[i] === key) {
          newArray.push(object);
        }
      }
    });
    return newArray;
  }
})();
