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
    this.getData();
  }

  getData(){
    for(let i = 0; i < this.service.locationLatLon.length; i++ ){
      this.service.getLocationData(i).subscribe( (data: any) => {
        console.log(data)
        data = data.features[0].properties
        this.weatherData.push(data);
        console.log(this.weatherData)
      })
      console.log(i)
    }
  }
}
