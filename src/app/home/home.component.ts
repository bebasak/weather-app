import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { slide, fade } from '../animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slide,
    fade
  ]
})
export class HomeComponent implements OnInit {
  weatherData: any;
  forecastData: any = [];
  testData = [];
  constructor(private service: HomeService) { }

  ngOnInit() {
  }

  del() {
    if(this.weatherData)
      this.weatherData = null;
    if(this.forecastData)
      this.forecastData = [];
  }

  getForecastWeather(input: HTMLInputElement) {
    let city: any = input.value

    this.service.getForecastWeather(city)
      .subscribe(
        response => {
          console.log(response['list'].length);
          for(let i = 0; i < response['list'].length; i++){
            if (i%8 === 0){
              this.forecastData.push(response['list'][i]);
            }
          }
          //this.forecastData = response;
        },
        (error: AppError) => {
          this.forecastData = [];
          if (error instanceof NotFoundError) {
            alert('Nie znaleziono.');
          }
          else {
            throw error;
          }
        });
  }

  getData(input: HTMLInputElement) {
    let city: any = input.value;

    this.service.getWeather(city)
      .subscribe(
        response => {
          console.log(response);
          this.weatherData = response;
        },
        (error: AppError) => {
          this.weatherData = null;
          if (error instanceof NotFoundError){            
            alert('Nie znaleziono.');
          }            
          else {
            throw error;
          }
        });
  }

}
