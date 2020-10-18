/*global $, google*/
(function(){
"use strict";

let username="shirashiffman";

const searchButton = $("#magnifying");
const  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.9286, lng: -73.7842 },
    zoom: 8,
  });

  const infowindow = new google.maps.InfoWindow();
searchButton.click(()=>{
    const searchVal = $("#search").val();
    $("#search").val("");
    //$("#list ul").empty();
    fetch(`http://api.geonames.org/wikipediaSearchJSON?q=${searchVal}&maxRows=10&username=${username}`)
    .then((r) => {
        if (!r.ok) {
          throw new Error("Error Loading Date");
        }
        return r.json();
      })
    .then(dataArray=>{
        dataArray = dataArray.geonames;
        console.log(dataArray);
        const bounds = new google.maps.LatLngBounds();
    
        dataArray.forEach(entry => {
       $(`<li>${entry.title}</li>`).appendTo($("#list ul")).click(()=>{
          map.setCenter({lat: entry.lat, lng: entry.lng});

          infowindow.setContent(
             `${entry.summary} <a href="${entry.wikipediaUrl}" target="_blank" >Learn More</a>`
          );
            infowindow.open(map, marker);
       });
       const marker = new google.maps.Marker({
        position: {lat:entry.lat,lng: entry.lng},
        map: map,
        icon: {
            url:entry.thumbnailImg,
            scaledSize: new google.maps.Size(50, 50)
        },
        title: entry.title
       });
       marker.addListener("click", () => {
         infowindow.setContent(entry.summary);
         infowindow.open(map, marker);
         
       });
       bounds.extend({lat: entry.lat, lng: entry.lng});
    });
    map.fitBounds(bounds);
    })
    .catch(e=>console.error(e));
});
}());