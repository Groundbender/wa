import { PosistionCoordinates, TemperatureUnit } from "@/types"

export enum WeatherActionTypes {
  FETCH_WEATHER_DATA = "weather/fetchWeatherData",
  FETCH_WEATHER_DATA_BY_SEARCH = "weather/fetchWeatherDataBySearch",
}

export interface WeatherWorkersPayload {
  location?: string
  position: PosistionCoordinates
  temperatureUnit: TemperatureUnit
}