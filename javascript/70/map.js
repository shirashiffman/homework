/*global $, google*/
(function () {
    "use strict";


    const map = new google.maps.Map(document.body, {
      center: {
        lat: 40.9286,
        lng: -73.7842
      },
      zoom: 8,
    });
    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);
    let markers = [];
    let i = 0;

    google.maps.event.addListener(drawingManager, 'overlaycomplete', e => {
      if (localStorage.markers){
        const saveItems = JSON.parse(localStorage.markers);
        saveItems.forEach(item=> markers.push(item));
      }
      console.log(e);
      if (e.type === 'marker') {
        markers.push({
          index: i++,
          type: e.type,
          position: {lat: e.overlay.position.lat(), lng: e.overlay.position.lng()}
        });
      
      } else if (e.type === 'circle') {
        markers.push({
          index: i++,
          type: e.type,
          center: {lat:e.overlay.center.lat(), lng: e.overlay.center.lng()},
          radius: e.overlay.radius
        });
     
      } else if (e.type === 'rectangle') {
       //console.log(e);
      
        markers.push({
          index: i++,
          type: e.type,
          bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(e.overlay.bounds.Ya.i,e.overlay.bounds.Sa.i),
            new google.maps.LatLng(e.overlay.bounds.Ya.j, e.overlay.bounds.Sa.j) 
        )
        });
      }
   

        else if (e.type === 'polyline') {
        markers.push({
          index: i++,
          type: e.type,
          path: e.overlay.getPath().getArray()
        });
        console.log(e.overlay.getPath().getArray());

     }
       else if (e.type === 'polygon') {
      
      markers.push({
        index: i++,
        type: e.type,
        path: e.overlay.getPath().getArray()
      });

    }
      localStorage.markers = JSON.stringify(markers);
      console.log(JSON.stringify(markers));
    });




    if (localStorage.markers) {

      const mArray = JSON.parse(localStorage.markers);
      //const keyArray = mArray.map((o)=>o.index); 
      mArray.forEach((m) => {
          switch (m.type) {
            case "marker":
              new google.maps.Marker({
                position: m.position,
                map: map,
                animation: google.maps.Animation.DROP
              });
              break;
            case "circle":
              new google.maps.Circle({
                map: map,
                center: m.center,
                radius: m.radius
              });
              break;
            case "rectangle":
              new google.maps.Rectangle({
                map: map,
                bounds: m.bounds
            
              });
              break;
              case "polyline":
                new google.maps.Polyline({
                  map: map,
                  path: m.path
              
                });
                break;
              case "polygon":
                new google.maps.Polygon({
                  map: map,
                  path: m.path
              
                });
              break;
            default:
              // code block
          }
        }
      );}

      $("button").click( ()=>{
        markers.forEach(m=>{
          m.setMap(null);

        });
        markers = [];
      });
}());