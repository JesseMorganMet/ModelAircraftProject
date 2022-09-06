import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
  @Input() dataLocation: any;
  @Input() dataWithTime: any;
  @Input() weatherStuff: any = {currentValue: []};

  // windSpeedSuitability: any = parseInt(this.weatherStuff[0]);
  // precipitationSuitability: any = parseInt(this.weatherStuff[1]);
  // visibilitySuitability: any = parseInt(this.weatherStuff[2]);

  windSpeedSuitability: number = this.weatherStuff.currentValue[0];
  precipitationSuitability: number = this.weatherStuff.currentValue[1];
  visibilitySuitability: number = this.weatherStuff.currentValue[2];

  i: number = 0;

  checker: any;
  checkAttributes: any;

  constructor() {
  }

  ngOnInit() {
    this.masterFunction();
  }

  ngOnChanges(change) {
    console.log(change)
    if(!change.weatherStuff.firstChange){
      this.masterFunction();
    }
    // if (!change.dataWithTime.firstChange) {
    //   this.masterFunction();
    // }
  }

  masterFunction() {
    this.checkAttributes = [];
    this.windChecker(this.dataWithTime.windSpeed10m);
    this.precipitationChecker(this.dataWithTime.probOfPrecipitation);
    this.visibilityChecker(this.dataWithTime.visibility);
    this.optimalWeather();
  }

  windChecker(data) {
    console.log(parseInt(this.weatherStuff.currentValue[0]))
    if (data <= parseInt(this.weatherStuff.currentValue[0])) {
      this.checkAttributes.push({optimal: true, class: "optimal", text: " Optimal"})
      return this.checkAttributes;
    } else {
      this.checkAttributes.push({optimal: false, class: "notOptimal", text: " Not Optimal"})
      return this.checkAttributes;
    }
  }

  precipitationChecker(data) {
    console.log(parseInt(this.weatherStuff.currentValue[1]))
    if (data <= parseInt(this.weatherStuff.currentValue[1])) {
      this.checkAttributes.push({optimal: true, class: "optimal", text: " Optimal"})
      return this.checkAttributes;
    } else {
      this.checkAttributes.push({optimal: false, class: "notOptimal", text: " Not Optimal"})
      return this.checkAttributes;
    }
  }

  visibilityChecker(data) {
    console.log(parseInt(this.weatherStuff.currentValue[2]))
    if (data >= parseInt(this.weatherStuff.currentValue[2])) {
      this.checkAttributes.push({optimal: true, class: "optimal", text: " Optimal"})
      return this.checkAttributes;
    } else {
      this.checkAttributes.push({optimal: false, class: "notOptimal", text: " Not Optimal"})
      return this.checkAttributes;
    }
  }

  optimalWeather() {
    for (let bools of this.checkAttributes) {
      if (bools.optimal == false) {
        this.checker = "Weather Requirements Are Not Optimal, NO GO";
        break;
      } else if (bools.optimal == true) {
        this.checker = "Weather is Optimal, GO";
      } else {
        this.checker = "Something went wrong";
      }
    }
  }
}
