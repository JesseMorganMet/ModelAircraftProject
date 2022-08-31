import {pOPrecipPipe, visiblityPipe, WeatherDataPipe, WindSpeedPipe} from './weather-data.pipe';

describe('windSpeedPipe', () => {
  it('Concatinate data into a string with mps', () => {
    const pipe = new WindSpeedPipe();
    expect(pipe.transform(10)).toBe("10m/s");
  });
});

describe('pOPrecipPipe', () => {
  it('Return rounded versions of precipitation via string with %', () => {
    const pipe = new pOPrecipPipe();
    expect(pipe.transform(3)).toBe("5%");
  });
});

describe('visibilityPipe', () => {
  it('Concatinate data into a string with v', () => {
    const pipe = new visiblityPipe();
    expect(pipe.transform(25000)).toBe("Very Good (25000m)");
  });
});
