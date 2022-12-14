import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {WeatherServiceService} from './weather-service.service';
import {of} from 'rxjs';
import {WeatherDataComponent} from './weather-data/weather-data.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: WeatherServiceService;
  let httpTestingController: HttpTestingController;
  let mockData = {features: [{properties: "any"}]};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        WeatherDataComponent
      ],
      providers: [
        WeatherServiceService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(WeatherServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  })
  describe('Methods', () => {
    describe('getData', () => {
      it('Should retrieve data and add to array', async () => {
        service.getLocationData = jest.fn().mockImplementation(() => {
          return of(mockData);
        });
        component.getData();
        await fixture.whenStable().then(() => {
          expect(component.weatherData.length).toBe(3);
        })
      })
    })
    describe('Connectivity Methods', () => {
      describe('liveCheck', () => {
        it('Should push two event objects into one array', () => {
          component.liveCheck();
          expect(component.subscriptions.length).toBe(2);
        })
      })
      describe('ngOnDestroy', () => {
        it('Should unsubscribe the two event objects from the array', () => {
          component.ngOnDestroy();
          expect(component.subscriptions.length).toBe(0);
        })
      })
    })
  })

});
