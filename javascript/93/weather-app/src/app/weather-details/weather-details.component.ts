import { Component, Input, OnInit } from '@angular/core';
import WeatherDetails from '../shared/weather-details';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent  {

  @Input()

  details: WeatherDetails;
  

}
