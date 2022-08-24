import {Component, Input} from '@angular/core';
import {WeatherServiceService} from './weather-service.service';
import {map, Observable, startWith} from 'rxjs';
import {WeatherDataComponent} from './weather-data/weather-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  weatherData:any = [];

  constructor(private service:WeatherServiceService) {  }

  ngOnInit(){

    this.service.getLocationData(0).subscribe( (data: any) => {
       this.weatherData.push(data);
    })
    this.service.getLocationData(1).subscribe( (data: any) => {
       this.weatherData.push(data);
    })
    this.service.getLocationData(2).subscribe( (data: any) => {
       this.weatherData.push(data);
    })
  }
}
