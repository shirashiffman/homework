/*global $*/
import $ from 'jquery';
import css from "./hw.css";
import img from "./apple.png";
(function(){
    'use strict';
   $('body').append(`<img src = ${img}/>`);
    let elements = [7,8,9,4,5,6,1,2,3,"+", 0, "-"];
    let answerDisplayed = false;
    //elements =$('#calculator div');
    console.log(elements);
    const calElem = $('#calculator');
    const answerElem = $('#answer');
    
    elements.forEach((element)=>{
        $(`<div>${element}</div>`).appendTo(calElem)
            .click(()=>{
                if(answerDisplayed){
                    answerElem.text('');
                    answerDisplayed = false;
                }
                if(element === '+' || element === '-'){
                   // this.attr()
                }
               console.log(element);
               answerElem.append(element);
            });
        }
    );
    $(`<div id="clear">${"clear"}</div>`).appendTo(calElem)
         .click(()=>{answerElem.text("");});

    

    $(`<div id="equals">${"="}</div>`).appendTo(calElem)
         .click(()=>{
                let inputText = answerElem.text();
                let answer;
                if(inputText.includes("+")){
                    let [number1, number2] = inputText.split("+");
                    answer = Number(number1) + Number(number2);
                }
                else if(inputText.includes("-")){
                    let [number1, number2] = inputText.split("-");
                    answer =Number(number1) - Number(number2);
                }
             
                answerDisplayed = true;
                answerElem.text(answer);
         });

     $(`<div id="back">${"delete"}</div>`).appendTo(calElem)
         .click(()=>{
             let textInput = answerElem.text();
             let newString = textInput.slice(0,-1);
             console.log(newString);
             answerElem.text(newString);
            
            });
        

}());