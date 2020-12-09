'use strict';

import $ from "jquery";
import "./index.css";
import data from "./images.json";

class Card{
    constructor(domElem, imgSrc){
        this.domElem = domElem;
        this.imageSrc = `./images/${imgSrc}`;
        this.clicked = false;
        this.matched =false;
        
    }
}
const cardContainerElem = $("#cardContainer");
const cardArray =[];
let clickCount = 0;

function loadCards(){
    data.forEach((image)=>{
        // let cardObject = new Card(`./images/${image}`);
        // const cardElem = $(`<div class ="card"><img src = "./images/cardBack.png"></div>`).appendTo(cardContainerElem)
        //     .on('click',function(){
        //       clickCard(cardObject, cardElem);
        //       console.log(cardObject.clicked);
        //       console.log(cardElem.attr("src"));
        //     });
        // cardArray.push(cardElem);
       
        const cardElem = $(`<div class ="card"><img src = "./images/cardBack.png"></div>`);
        const card = new Card(cardElem, image);
         card.domElem.on('click',function(){
              clickCard(card);
            });
        cardArray.push(card);

        const cardElem2 = $(`<div class ="card"><img src = "./images/cardBack.png"></div>`);
        const card2 = new Card(cardElem2, image);
         card2.domElem.on('click',function(){
              clickCard(card2);
            });
        cardArray.push(card2);
        
    });
    
    shuffleArray(cardArray);
    cardArray.forEach(card=>cardContainerElem.append(card.domElem) );

function clickCard(card){
    if(!card.clicked && clickCount < 2){
        card.domElem[0].firstChild.src= card.imageSrc;
        card.clicked = true;
        clickCount++;
        console.log(card.domElem[0].firstChild);
    }
    // else{
    //     card.domElem[0].firstChild.src ='./images/cardBack.png';
    //     card.clicked = false;
    //     clickCount--;
    // }
    if(clickCount === 2){
        setTimeout(checkMatch, 1500);
    }
   
    
}
function flipCardBack(card){
    card.domElem[0].firstChild.src ='./images/cardBack.png';
    card.clicked = false;  
}

function checkMatch(){
    if(clickCount === 2){
        let newArray = cardArray.filter(card=>card.clicked === true && card.matched ===false);
        if(newArray[0].imageSrc === newArray[1].imageSrc){
            newArray.forEach(card=>{
                card.matched = true;
                //card.domElem[0].firstChild.classList.push("match");
            });
            console.log('match!');
            clickCount = 0;
        }
        else{clearClicked();}
    }
}
function clearClicked(){
        let newArray = cardArray.filter(card=>card.clicked === true && card.matched ===false);
        newArray.forEach(card=> flipCardBack(card));
        console.log(newArray);
        clickCount =0;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

}

loadCards();