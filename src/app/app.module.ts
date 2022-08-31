import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WeatherDataComponent} from './weather-data/weather-data.component';
import {WeatherServiceService} from './weather-service.service';
import {HttpClientModule} from '@angular/common/http';
import {pOPrecipPipe, visiblityPipe, WeatherDataPipe, WindSpeedPipe} from './weather-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDataComponent,
    WeatherDataPipe,
    WindSpeedPipe,
    pOPrecipPipe,
    visiblityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: (service: WeatherServiceService) => () => service.setup(),
      deps: [WeatherServiceService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
