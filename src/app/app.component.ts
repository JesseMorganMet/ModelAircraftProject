import {Component} from '@angular/core';
import {WeatherServiceService} from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'App Name Goes Here';
  weatherData:any = [];
  locLength:number = this.service.locationLatLon.length
  local:any;

  constructor(private service:WeatherServiceService) {  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    for(let i = 0; i < this.locLength; i++ ){
      this.service.getLocationData(i).subscribe( (data: any) => {
        data = data.features[0].properties
        this.weatherData.push(data);
      })
    }
  }

  example($event: any, i){this.local = i;}
}
