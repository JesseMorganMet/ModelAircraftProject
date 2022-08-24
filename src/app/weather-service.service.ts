import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WeatherDataComponent} from './weather-data/weather-data.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  locationLatLon = [`latitude=53.104709519168686&longitude=-3.9125189914657086`,`latitude=53.31727762086625&longitude=-3.481558103099215`,`latitude=52.13176376364786&longitude=-4.546721048689262`];
  i:any
  private baseUrl = `https://api-metoffice.apiconnect.ibmcloud.com/v0/forecasts/point/hourly?excludeParameterMetadata=true&includeLocationName=true&`;

  constructor(private http: HttpClient) { }

    getLocationData(id:number) {
    const apiUrl = `${this.baseUrl + this.locationLatLon[id]}`;
    let headers = new HttpHeaders();
    headers = headers.append('X-IBM-Client-Id', 'da539e1ef8b771d86e1aa2cf44b8efb8');
    headers = headers.append('X-IBM-Client-Secret', '93f9d7ea7fb3e2e6b1d3f770ce553405');
    console.log(this.http.get(apiUrl, {headers}))
    return this.http.get(apiUrl, {headers});
  }
}

// Capel Curig === latitude=53.104709519168686&longitude=-3.9125189914657086 === locationLatLon[0]
//
// Rhyl === latitude=53.31727762086625&longitude=-3.481558103099215 === locationLatLon[1]
//
// Aberporth === latitude=52.13176376364786&longitude=-4.546721048689262 === locationLatLon[2]
