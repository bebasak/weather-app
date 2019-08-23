import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherData: any;

  constructor(private service: HomeService) { }

  ngOnInit() {
  }

  getData(input: HTMLInputElement) {
    let city: any = input.value;

    console.log('city: '+ city);
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
