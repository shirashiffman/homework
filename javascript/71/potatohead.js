/*global $ */
(function(){
    'use strict';
    let dragging;
    let offset;
    let z =1;
    let savedItems =[];

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
          // const toolbox= $("#toolbox");
           let topOffset = 0;
           imgArray.forEach(img=>{
               const image = $(`<img src="media/${img}.png" class ="draggable sizeable" alt="">`).appendTo(document.body);
               image.css({top: topOffset});
               image.css("left", 0);
               topOffset += 30;
           });
        })
        .catch(e=> console.error(e));

    if(localStorage.items){
     // savedItems = localStorage.getItem("items");
     console.log(localStorage.getItem("items"));
    }

    if(savedItems.length >= 0){
      for(let i=0; i< savedItems.length; i++){
        const saved = $(`img[src='${savedItems[i].source}]`);
        saved.css("top", saved.y);
        saved.css("left", saved.x);
      }
    }

    $(document).on('mousedown', '.draggable', e => {
  
        offset = { x: e.offsetX, y: e.offsetY };
        dragging = $(e.target);
      });
      
      $(document).mousemove(e => {
        if (dragging) {
          e.preventDefault(); 
          dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
      }).mouseup(e => {
        if (dragging) {
          if(savedItems.findIndex((item)=>(item.source === dragging.attr("src")))!== -1){
           let i =savedItems.findIndex((item)=>(item.source === dragging.attr("src")));
           console.log(i);
           savedItems[i].y = dragging.css("top");
           savedItems[i].x =  dragging.css("left");
          }
          else{ savedItems.push({
                source: dragging.attr("src"),
                y: dragging.css("top"),
                x: dragging.css("left")
            });
            }
          
            localStorage.items= JSON.stringify(savedItems);
            console.log( JSON.stringify(savedItems));
            dragging = null;
          }
        }


      );
      

      // let sizing;
      // let newSize;
      // let baseSize;
      // $(document).on('mousedown', '.sizeable', e => {
      //   if(e.button === 2){
      //     e.preventDefault();
      //   newSize = { x: e.offsetX, y: e.offsetY };
      //   sizing = $(e.target);
      //   baseSize = {height: sizing.style.height, width: sizing.style.width};
      //   }
      // }).mousemove(e => {
      //   if (sizing) {
      //     e.preventDefault(); 
      //     sizing.css({ height: baseSize.height + newSize.y, width: baseSize.width + newSize.x });
      //   }
      // }).mouseup(e => {
      //   if (sizing) {
      //     console.log('mouseup', e);
      //     sizing = null;
         
      //       }
          
      // });
    
    
      $(document).on('click', '.draggable', function(){
        this.style.zIndex = ++z;
      });

      
      
}());