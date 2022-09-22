import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherServiceService} from './weather-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Model Aircraft Forecast';
  weatherData: any = [];
  locLength: number = this.service.locationLatLon.length
  locationID: any;
  timeID: any = 0;

  formPrecipitationArr: any = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  formVisibilityArr: any = [
    {sign: "<", value: 1000},
    {sign: "<", value: 4000},
    {sign: "<", value: 10000},
    {sign: "<", value: 20000},
    {sign: "<", value: 40000},
    {sign: ">", value: 40000}
  ]

  precipitationInput: any;
  visibilityInput: any;
  windSpeedInput: any;

  f = new FormGroup({
    wind: new FormControl(10),
    rain: new FormControl(20),
    vis: new FormControl(20000)
  });

  onlineEvent: Observable<Event> = new Observable<Event>;

  offlineEvent: Observable<Event> = new Observable<Event>;

  subscriptions: Subscription[] = [];

  liveMessage: string = "";
  liveStatus: string = "";

  constructor(private service: WeatherServiceService) {
  }

  ngOnInit() {
    this.liveCheck();
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

  btnClick(f) {
    console.log(f)
    //this button can eventually be repurposed as a "save values" button
    console.log(f.value)
    return f.value;
  }

  liveCheck() {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      this.liveMessage = 'Connection back online';
      this.liveStatus = 'online';
      console.log('Online');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.liveMessage = 'Connection lost! You may not see accurate data while Offline';
      this.liveStatus = 'offline';
      console.log('Offline');
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
