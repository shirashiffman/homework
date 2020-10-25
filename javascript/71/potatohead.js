/*global $ */
(function(){
    'use strict';
    let dragging;
    let offset;
    let z =1;

    fetch("media.json")
        .then(r =>{
            if(!r.ok){
                throw new Error();
            }
            console.log("fetch");
            return r.json();
        })
        .then(array=>{
            let imgArray = array.media;
           const toolbox= $("#toolbox");
           let topOffset = 0;
           imgArray.forEach(img=>{
               const image = $(`<img src="media/${img}.png" class ="draggable" alt="">`).appendTo(toolbox)
               image.css({top: topOffset});
               topOffset += 10;
           });
        })
        .catch(e=> console.error(e));

    $(document).on('mousedown', '.draggable', e => {
        offset = { x: e.offsetX, y: e.offsetY };
        dragging = $(e.target);
      }).mousemove(e => {
        if (dragging) {
          e.preventDefault(); 
          dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
      }).mouseup(e => {
        if (dragging) {
          console.log('mouseup', e);
          dragging = null;
        }
      });
    
      $(document).on('click', '.draggable', function(){
        this.style.zIndex = ++z;
      });

      const imgElements = $(".draggable");
      
      
}());