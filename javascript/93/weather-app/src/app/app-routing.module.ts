import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent
  }, 
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
