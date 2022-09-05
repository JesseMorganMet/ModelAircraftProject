import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDataComponent} from './weather-data.component';
import {pOPrecipPipe, visiblityPipe, WindSpeedPipe} from '../weather-data.pipe';

describe('WeatherDataComponent', () => {
  let component: WeatherDataComponent;
  let fixture: ComponentFixture<WeatherDataComponent>;
  const mockDataL = {
    "name": "mike"
  };
  const mockDataT = {
    "time": "2022-08-26T13:00Z",
    "max10mWindGust": 10,
    "probOfPrecipitation": 5,
    "visibility": 20
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherDataComponent,
        WindSpeedPipe,
        pOPrecipPipe,
        visiblityPipe
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherDataComponent);
    component = fixture.componentInstance;
  });

  it('Should match snapshot', () => {
    component.dataLocation = mockDataL;
    component.dataWithTime = mockDataT;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  describe('Should test windChecker function', () => {
    it('Should return True', () => {
      component.checkAttributes = [];
      let data = 2;
      component.windSpeedSuitability = 5;
      component.windChecker(data);
      expect(component.checkAttributes[0].optimal).toBe(true);
    });
    it('Should Return False', () => {
      component.checkAttributes = [];
      let data = 10;
      component.windSpeedSuitability = 5;
      component.windChecker(data);
      expect(component.checkAttributes[0].optimal).toBe(false);
    });
  });

  describe('Should test precipitationChecker function', () => {
    it('Should return True', () => {
      component.checkAttributes = [];
      let data = 2;
      component.precipitationSuitability = 5;
      component.precipitationChecker(data);
      expect(component.checkAttributes[0].optimal).toBe(true);
    });
    it('Should Return False', () => {
      component.checkAttributes = [];
      let data = 10;
      component.precipitationSuitability = 5;
      component.precipitationChecker(data);
      expect(component.checkAttributes[0].optimal).toBe(false);
    });
  });

  describe('Should test visibilityChecker function', () => {
    it('Should return True', () => {
      component.checkAttributes = [];
      let data = 10;
      component.visibilitySuitability = 5;
      component.visibilityChecker(data);
      expect(component.checkAttributes[0].optimal).toBe(true);
    });
    it('Should Return False', () => {
      component.checkAttributes = [];
      let data = 2;
      component.visibilitySuitability = 5;
      component.visibilityChecker(data);
      expect(component.checkAttributes[0].optimal).toBe(false);
    });
  });
  describe('Should test optimalWeather function', () => {
    it('Should return String if anything with key of optimal is false', () => {
      component.checkAttributes = [{optimal:true},{optimal:true},{optimal:false}]
      component.optimalWeather();
      expect(component.checker).toBe("Weather Requirements Are Not Optimal, NO GO");
    });
    it('Should Return String if everything with key of optimal is True', () => {
      component.checkAttributes = [{optimal:true},{optimal:true},{optimal:true}]
      component.optimalWeather();
      expect(component.checker).toBe("Weather is Optimal, GO");
    });
    it('Should Return String if neither', () => {
      component.checkAttributes = [{},{},{}]
      component.optimalWeather();
      expect(component.checker).toBe("Something went wrong");
    });
  });

});
