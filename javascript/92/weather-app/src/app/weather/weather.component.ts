import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 import { WeatherDetails } from '../shared/weather-details';
import { Weather } from '../shared/weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

 weatherDetails!: WeatherDetails;
 zip = "";

  ngOnInit(): void {
   
  }

  getWeather(zip){
    this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&units=imperial&appid=`)
    .subscribe(
      data =>{
        this.weatherDetails = {
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon
       }
       console.log(data);
      }
    )
  }

}
