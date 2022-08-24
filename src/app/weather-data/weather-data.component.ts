import {Component, Input, OnInit, Output} from '@angular/core';
import {WeatherServiceService} from '../weather-service.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit(){
  }

}
