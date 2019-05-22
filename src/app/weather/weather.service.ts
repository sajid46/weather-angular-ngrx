import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Forecast } from '../model/weather';
import { HttpClient } from '@angular/common/http';

import cityjson from '../../assets/data/cityids.json';



@Injectable()

export class WeatherService {
  readonly url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };
  data: any;
  city_id: Promise<void>;
  cityid: any;

  constructor(private http: HttpClient) { }

  cityUrl = '../../assets/data/cityids.json';

  getCityID(city: any) {
    return this.http.get(this.cityUrl)
      .subscribe(data  => { console.log(data); });
  }


  // getCityID(city: any) {
  //   return this.http.get(this.cityUrl).pipe(
  //     map(items => {
  //       return items.filter(items => items.name === city);
  //     }, error => error));
  // }

  searchWeatherForCity(cityname: any): Observable<any> {
    this.cityid = this.getCityID(cityname);
    return this.http
      .get<any>(this.url + '/hourly?id=' + this.cityid + '&appid=' + this.params.APPID);
  }



}
