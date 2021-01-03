import React, {Component} from 'react';
import './App.css';
import WeatherDetails from './WeatherDetails';

export default class App extends Component {
  
 
  constructor(props){
    super(props);
    this.state = {
      zip: null,
      weatherDetails: {
        temp: null,
        description: null,
        icon: null
      }
    }
    this.key = "";
    this.handleGo = this.handleGo.bind(this);
    this.getZip= this.getZip.bind(this);
  }

  
  handleGo(e){
    console.log(e);
    e.preventDefault();
    console.log(this.state.zip);

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&units=imperial&appid=${this.key}`)
      .then ((r)=>{
        if(!r.ok){
          throw new Error(r.status);
        }
        return r.json();
      })
      .then ((data)=>{
        console.log(data);
        let weather = {
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        }
        this.setState({
          weatherDetails: weather
        })
      })
      .catch((e)=>{
        console.log(e);
      })
  }

  getZip(e){
    this.setState({zip: e.target.value});
  }
  
  render() {
   return(
     <>
    <div id= "input">
      <form>
        Zip Code<input onChange ={this.getZip}></input>
        <button onClick ={this.handleGo}>Go</button>
      </form>
    </div>
    <div id ="details">
      < WeatherDetails details={this.state.weatherDetails}/>
    </div>
    </>
   );
  }
}

