import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  locationLatLon = [`latitude=53.105&longitude=-3.913`,`latitude=53.317&longitude=-3.482`,`latitude=52.132&longitude=-4.547`];
  i:any
  private baseUrl = `https://api-metoffice.apiconnect.ibmcloud.com/v0/forecasts/point/hourly?excludeParameterMetadata=true&includeLocationName=true&`;

  constructor(private http: HttpClient) { }

    getLocationData(id:number) {
    const apiUrl = `${this.baseUrl + this.locationLatLon[id]}`;
    let headers = new HttpHeaders();
    headers = headers.append('X-IBM-Client-Id', 'da539e1ef8b771d86e1aa2cf44b8efb8');
    headers = headers.append('X-IBM-Client-Secret', '93f9d7ea7fb3e2e6b1d3f770ce553405');
    console.log(this.http.get(apiUrl, {headers}))
    // return this.http.get(apiUrl, {headers});
    return this.http.get("./assets/response.json")
  }
}

// Capel Curig === latitude=53.105&longitude=-3.913 === locationLatLon[0]
//
// Rhyl === latitude=53.317&longitude=-3.482 === locationLatLon[1]
//
// Aberporth === latitude=52.132&longitude=-4.547 === locationLatLon[2]
