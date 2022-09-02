import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'weatherData'})
export class WeatherDataPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

@Pipe({name: 'windSpeed'})
export class WindSpeedPipe implements PipeTransform {
  transform(data: any): string {
    return (data + "m/s");
  }
}

@Pipe({name: 'pOPrecip'})
export class pOPrecipPipe implements PipeTransform {
  transform(data: any): string {
    let ppRound = Math.round(data / 5) * 5;
    if (ppRound >= 10) {
      ppRound = Math.round(ppRound / 10) * 10;
    }
    return (ppRound + "%");
  }
}

@Pipe({name: 'vis'})
export class visiblityPipe implements PipeTransform {
  transform(data: any): string {
    const limits = [
      {value: 1000, prefix: 'Very Poor'},
      {value: 4000, prefix: 'Poor'},
      {value: 10000, prefix: 'Medium'},
      {value: 20000, prefix: 'Good'},
      {value: 40000, prefix: 'Very Good'}
    ]
    for (const limit of limits) {
      if (data < limit.value) {
        return `${limit.prefix} (${data}m)`
      }
    }
    if (data > 40000) {
      return (`Excellent (${data}m)`)
    } else {
      return (`Something went wrong, data is ${data}`);
    }
  }
}
