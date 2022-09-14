import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WeatherDataComponent} from './weather-data/weather-data.component';
import {WeatherServiceService} from './weather-service.service';
import {HttpClientModule} from '@angular/common/http';
import {pOPrecipPipe, visiblityPipe, WeatherDataPipe, WindSpeedPipe} from './weather-data.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
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
