import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppError } from '../common/app-error';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'https://community-open-weather-map.p.rapidapi.com/weather?q=';

  private headerOptions = {
    headers: new HttpHeaders({
      'x-rapidadpi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '8278d08223msh9efe111fa146d43p1aacbajsnee2d5b628149'
    })
  }

  constructor(private http: HttpClient) { }

  

  getWeather(city: string) {
    return this.http.get(this.url + city, this.headerOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));

    if (error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error.json()));
  }
}
