import { CurrentWeather, ResponseStatus, WeatherCondition, WeatherPerHour } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface WeatherData {
  timezone: string
  weatherPerHour: WeatherPerHour[] | null
  weatherDetails: CurrentWeather  | null
  weatherNow: WeatherCondition | null
}

interface WeatherDataFromServer {
  timezone: string
  hourly: WeatherPerHour[]
  current: CurrentWeather 
  weather: WeatherCondition
}

export interface WeatherInitialState {
  weatherData: WeatherData
  status: ResponseStatus
}

const initialState: WeatherInitialState = {
  weatherData: {
    timezone: '',
    weatherPerHour: null,
    weatherDetails: null,
    weatherNow: null
  },
  status: 'idle',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherLoading: (state) => {
      state.status = 'loading'
    },
    setWeatherError: (state) => {
      state.status = 'error'
      state.weatherData = initialState.weatherData
    },
    putWeatherData: (state, action: PayloadAction<WeatherDataFromServer>) => {
      state.status = 'idle'
      state.weatherData = {
        timezone:  action.payload.timezone,
        weatherNow:  action.payload.current.weather[0],
        weatherDetails:  action.payload.current,
        weatherPerHour:  action.payload.hourly.slice(0, 8),
      }
    }
   },
})

export const { putWeatherData, setWeatherError, setWeatherLoading } = weatherSlice.actions

export default weatherSlice.reducer