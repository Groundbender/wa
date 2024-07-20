import { ReactElement } from "react";

export type TemperatureUnit = "metric" | "imperial"

export type PosistionCoordinates = { 
  lat: number;
  lng: number;
};

export  type ResponseStatus = 'idle' | 'loading' | 'error'

export interface CurrentWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  wind_deg: number;
  wind_speed: number;
  weather: WeatherCondition[]
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherPerHour {
  dt: number;
  temp: number;
  weather: WeatherCondition[]
}

export interface DetailsContent {
  title: string;
  value: keyof Omit<CurrentWeather, "weather">;
  icon: ReactElement;
  measureUnit: string;
  isTimestamp: boolean;
}