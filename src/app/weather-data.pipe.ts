import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'weatherData'})
export class WeatherDataPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

@Pipe({name: 'windSpeed'})
export class WindSpeedPipe implements PipeTransform {
  transform(data: any):string{
    return (data + "m/s");
  }
}

@Pipe({name: 'pOPrecip'})
export class pOPrecipPipe implements PipeTransform {
  transform(data: any):string{
    let ppRound = Math.round(data/5)*5;
    if(ppRound >= 10){
      ppRound = Math.round(ppRound/10)*10;
    }
    return (ppRound + "%");
  }
}

@Pipe({name: 'vis'})
export class visiblityPipe implements PipeTransform {
  transform(data: any):string{
    if(data<1000){
      return ("Very Poor " +`(${data}m)`)
    } else if(data<4000){
      return ("Poor " +`(${data}m)`)
    }else if(data<10000){
      return ("Medium " +`(${data}m)`)
    }else if(data<20000){
      return ("Good " +`(${data}m)`)
    }else if(data<40000){
      return ("Very Good " +`(${data}m)`)
    }else if(data>40000){
      return ("Excellent " +`(${data}m)`)
    }else{
      return ("Something went wrong data is" + data);
    }
  }
}
