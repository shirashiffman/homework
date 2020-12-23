import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  elements = [7,8,9,4,5,6,1,2,3,];
  answerDisplayed = false;


  state = {
    answer: 0,
    number1: 0,
    number2: 0,
    first: true,
    operator: null,
    display: null
  }

  elementClicked= (e)=>{
    if(this.state.answerDisplayed){
      this.setState({
        answer: null,
        answerDisplayed: false,
        display: null
      })
    }
    else{
      if(this.state.first){
        this.setState({
          number1: this.state.number1===0 ? e.target.innerHTML : (this.state.number1 + e.target.innerHTML),
          display: this.state.number1===0 ? e.target.innerHTML : (this.state.number1 + e.target.innerHTML)
        })
       
      }
      else{
        this.setState({
          number2: this.state.number2===0 ? e.target.innerHTML : (this.state.number2 + e.target.innerHTML),
          display:this.state.number2===0 ? e.target.innerHTML : (this.state.number2 + e.target.innerHTML)
        })      
      }
      console.log(this.state);
    }

  }

 
 

  clear = ()=>{
    this.setState({
      answer: null,
      number1: 0,
      number2: 0,
      first: true,
      display: null
    })
  }

  plus = ()=>{
    if(this.state.number1 !== 0){
      this.setState({
        first: false,
        operator: "+",
        display: "+"
      })
    }
  }
  
  minus = ()=>{
    if(this.state.number1 !== 0){
      this.setState({
        first: false,
        operator: "-",
        display: "-"
      })
    }
  }
  

  equals = ()=>{
             let answerCalc;
              if(this.state.operator==="+"){
                answerCalc = Number(this.state.number1) + Number(this.state.number2);  
              }
              else{
                answerCalc = Number(this.state.number1) - Number(this.state.number2); 
              }
              
              this.setState({
                answer: answerCalc,
                number1: 0,
                number2: 0,
                first: true,
                display: answerCalc
              })
    
            
       }

  //  back = ()=>{
  //          let textInput = answerElem.text();
  //          let newString = textInput.slice(0,-1);
  //          console.log(newString);
  //          answerElem.text(newString);
          
  //         });
      

  render(){
    return (
    <div id = 'calculator'>
       {this.elements.map((element)=>(
        <div onClick = {this.elementClicked} key={element}>{element}</div>
       ))}
      
       <div onClick = {this.plus} key={"+"}>+</div>
       <div onClick = {this.elementClicked} key={0}>0</div>
       <div onClick = {this.minus} key="-">-</div>
       <div id ="clear" onClick ={this.clear}>Clear</div>
       
       <div id='equals' onClick={this.equals}>=</div>
       {/* <div id ="back">--</div> */}
      <div id = "answer">{this.state.display}</div>
    
    </div>
    )
  
  }

}


