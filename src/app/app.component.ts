import {Component} from '@angular/core';
import {WeatherServiceService} from './weather-service.service';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
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
  formVisibilityArr: any = [{sign:"<",value:1000}, {sign:"<",value:4000}, {sign:"<",value:10000}, {sign:"<",value:20000}, {sign:"<",value:40000}, {sign:">",value:40000}]

  precipitationInput: any;
  visibilityInput: any;
  windSpeedInput: any;

  default:any={wind:10,rain:20,vis:20000};

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

  setDefaultForm(f: NgForm) {
    console.log(f)
    console.log(f.touched)
    if(!f.touched){
      f.resetForm({
        wind: 10,
        rain: 20,
        vis: 20000
      });
    }
    return f;
  }

  click(){

  }

  btnClick(f: NgForm) {
    console.log(f)
    //this button can eventually be repurposed as a "save values" button
    console.log(f.form.value)
    return f.form.value;
  }
}
