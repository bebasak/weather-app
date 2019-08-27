import { TestBed, async, getTestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HomeComponent } from '../home/home.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


describe('HomeService', () => {
  let service: HomeService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule ],
      providers: [ HomeService ]
    });
    injector = getTestBed();

    service = new HomeService(null);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    //service = injector.get(HomeService);
  });


  it('#homeService should be created', () => {
    //const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });

  it('should do something', () => {
    spyOn(service, 'getWeather');
    service.getWeather('');
    expect(service.getWeather).toHaveBeenCalled();
  });
});
