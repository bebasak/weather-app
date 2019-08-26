import { TestBed, async, getTestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HomeComponent } from '../home/home.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


describe('HomeService', () => {
  let service: HomeService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let component: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule ],
      providers: [ HomeService ]
    });

    injector = getTestBed();
    service = injector.get(HomeService);
    httpMock = injector.get(HttpTestingController);
  });


  it('should be created', () => {
    //const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });

  it('should do something', () => {
    spyOn(service, 'getWeather');
    service.getWeather('');
    expect(service.getWeather).toHaveBeenCalled();
  });
});
