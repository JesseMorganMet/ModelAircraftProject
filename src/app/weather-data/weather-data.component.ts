import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
  @Input() dataLocation: any;
  @Input() dataWithTime: any;
  @Input() weatherParameters: any;

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
    this.masterFunction();
  }

  masterFunction() {
    this.checkAttributes = [];
    this.windChecker(this.dataWithTime.windSpeed10m);
    this.precipitationChecker(this.dataWithTime.probOfPrecipitation);
    this.visibilityChecker(this.dataWithTime.visibility);
    this.optimalWeather();
  }

  windChecker(data) {
    if (data <= this.weatherParameters.wind) {
      this.checkAttributes.push({optimal: true, class: "optimal", text: " Optimal"})
      return this.checkAttributes;
    } else {
      this.checkAttributes.push({optimal: false, class: "notOptimal", text: " Not Optimal"})
      return this.checkAttributes;
    }
  }

  precipitationChecker(data) {
    if (data <= this.weatherParameters.rain) {
      this.checkAttributes.push({optimal: true, class: "optimal", text: " Optimal"})
      return this.checkAttributes;
    } else {
      this.checkAttributes.push({optimal: false, class: "notOptimal", text: " Not Optimal"})
      return this.checkAttributes;
    }
  }

  visibilityChecker(data) {
    if (data >= this.weatherParameters.vis) {
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
