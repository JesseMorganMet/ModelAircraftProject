import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataComponent } from './weather-data.component';

describe('WeatherDataComponent', () => {
  let component: WeatherDataComponent;
  let fixture: ComponentFixture<WeatherDataComponent>;
  const mockData = {
    "location": {
      "name": "mike"
    },
    "timeSeries": [{
      "max10mWindGust": 10,
      "probOfPrecipitation": 5,
      "visibility": 20
    }]
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDataComponent);
    component = fixture.componentInstance;
  });

  it('Should match snapshot', () => {
    component.data = mockData;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
