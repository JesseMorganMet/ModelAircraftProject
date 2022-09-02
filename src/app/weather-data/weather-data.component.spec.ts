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
    component.dataWTime = mockDataT;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
