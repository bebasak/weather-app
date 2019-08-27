import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CapitalizeFirstLetterPipe } from '../capitalize-first-letter.pipe';
import { HomeService } from '../services/home.service';
import { from, Observable, throwError, empty } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { By } from '@angular/platform-browser';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let service: HomeService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, FormsModule ],
      declarations: [ HomeComponent, CapitalizeFirstLetterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    service = new HomeService(null);
    component = new HomeComponent(service);
  });

  it('should set weatherData to some data from server', () => {
    let vals = [1, 2, 3];
    let s = {value: 'test'};
    spyOn(service, 'getWeather').and.callFake(() => {
      return from([ vals ]);
    });
    
    component.getData(s as HTMLInputElement);

    expect(component.weatherData).toBe(vals);
  });

  it('should set forecastDate to some data from server (every 8th record)', () => {
    let vals = {list: [{num: 0}, {num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5}, {num: 6}, {num: 7}, {num: 8}] };
    let s = {value: 'test'};
    spyOn(service, 'getForecastWeather').and.callFake(() => {
      return from([ vals ]);
    });
    
    component.getForecastWeather(s as HTMLInputElement);

    expect(component.forecastData).toEqual([{num: 0}, {num: 8}]);
  });

  it('#del should set weatherData to null if exists', () => {
    let component = new HomeComponent(null);
    component.weatherData = { 1: 'something'};

    component.del();

    expect(component.weatherData).toBeNull();
  });

  it('#del should set forecastData to emtpy array if exists', () => {
    let component = new HomeComponent(null);
    component.forecastData = [{1: 'something'}];

    component.del();

    expect(component.forecastData).toEqual([]);
  });

  it('should call server to get weather data', () => {
    let s = {value: 'test'};
    let spy = spyOn(service, 'getWeather').and.callFake( c => {
      return empty();
    });

    component.getData(s as HTMLInputElement);

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Weather app');
  });

  // it('should return error and reset weatherDate property', () => {
  //   let s = {value: 'test'};    
  //   let error = 'error from the server';
  //   let spy = spyOn(service, 'getWeather').and.returnValue(throwError(error));

  //   component.getData(s as HTMLInputElement);

  //   expect(component.weatherData).toBeNull();
  //   expect(component.weatherData).toThrowError;
  // });

  // it('should return 404 error', () => {
  //   let s = {value: 'test'};
  //   let spy = spyOn(service, 'getWeather').and.returnValue(throwError(NotFoundError));

  //   component.getData(s as HTMLInputElement);

  //   expect(component.weatherData).toBeNull();
  //   expect(component.weatherData).toThrowError;
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
