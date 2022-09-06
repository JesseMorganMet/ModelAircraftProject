import {Component} from '@angular/core';
import {WeatherServiceService} from './weather-service.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {WeatherDataComponent} from './weather-data/weather-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'App Name Goes Here';
  weatherData: any = [];
  locLength: number = this.service.locationLatLon.length
  locationID: any;
  timeID: any = 0;

  formPrecipitationArr: any = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  formVisibilityArr: any = [1000, 4000, 10000, 20000, 40000, 40000]

  precipitationInput: any;
  visibilityInput: any;
  windSpeedInput: FormControl = new FormControl();

  weatherInputs: any = {wind: 10, rain: 20, vis: 10000}


  constructor(private service: WeatherServiceService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    for (let i = 0; i < this.locLength; i++) {
      this.service.getLocationData(i).subscribe((data: any) => {
        data = data.features[0].properties
        this.weatherData.push(data);
      })
    }
  }

  btnClick() {
    this.weatherInputs.wind = this.windSpeedInput.value
    this.weatherInputs.rain = this.precipitationInput
    this.weatherInputs.vis = this.visibilityInput
    console.log(this.weatherInputs)
    return this.weatherInputs;
  }
}
