import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/model/weather';
import { WeatherService } from '../../weather.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  weatherofcity: Forecast[];
  cityname: any;
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED

  // constructor(private service: WeatherService) { }
  constructor(private service: WeatherService) { }

  search2() {
    alert('asas');
  }

  fn_onkeyup(event: any) {
this.cityname = event.target.value;
  }

  search() {
    this.service.searchWeatherForCity(this.cityname)
      .subscribe(forecasts => {
        this.weatherofcity = forecasts as Forecast[];
      });

  }
}
