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
  let mockResult: any = [];

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
    describe('btnClick', () => {
      it('Should Add objects to an object', async () => {
        component.weatherInputs = {wind: 5};
        component.precipitationInput = 50;
        component.visibilityInput = 15;

        component.btnClick();
        expect(component.weatherInputs).toBe({wind: 5, rain: 50, vis: 15});
      })
    })
  })
});
