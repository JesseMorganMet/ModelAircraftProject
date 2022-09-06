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
  formPrecipitationArr:any = [0,5,10,20,30,40,50,60,70,80,90,100];
  // formVisibilityArr:any = ["Very Poor (1000)","Poor (4000)","Medium (10000)","Good (20000)","Very Good (40000)","Excellent (40000+)"]
  formVisibilityArr:any = [1000,4000,10000,20000,40000,40000]

  precipitationInput:any;
  visibilityInput:any;
  windSpeedInput: FormControl = new FormControl();
  // weatherThings: any = [10,20,10000];
  weatherThings: any = {currentValue:[10, 20, 10000]};


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
  btnClick(){
    this.weatherThings = [];
    this.weatherThings.push(this.windSpeedInput.value)
    this.weatherThings.push(this.precipitationInput)
    this.weatherThings.push(this.visibilityInput)
    console.log(this.windSpeedInput.value)
    console.log(this.precipitationInput)
    console.log(this.visibilityInput)
    console.log(this.weatherThings)
    return this.weatherThings;
  }
}
