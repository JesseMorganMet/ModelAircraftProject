import {Component} from '@angular/core';
import {WeatherServiceService} from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  weatherData:any = [];
  i: any;

  constructor(private service:WeatherServiceService) {  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    for(let i = 0; i < this.service.locationLatLon.length; i++ ){
      this.i=i
      this.service.getLocationData(i).subscribe( (data: any) => {
        data = data.features[0].properties
        this.weatherData.push(data);
      })
    }
  }
}
