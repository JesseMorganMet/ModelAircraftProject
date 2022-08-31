import {Component} from '@angular/core';
import {WeatherServiceService} from './weather-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';

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
}
