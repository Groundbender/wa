import { CurrentWeather, ResponseStatus, WeatherCondition, WeatherPerHour } from '@/types/weather'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface WeatherData {
  timezone: string
  weatherPerHour: WeatherPerHour[]
  weatherDetails: Omit<CurrentWeather, "weather">  | null
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
    weatherPerHour: [],
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
    putWeatherData: {
      reducer: (state, action: PayloadAction<WeatherData>) => {
        state.status = 'idle'
        state.weatherData = action.payload
      },
      prepare: (data: WeatherDataFromServer): { payload: WeatherData} =>  {
        const { current, hourly, timezone} = data;
        
        const weatherPerHour = hourly.map(({ dt, temp, weather }) => ({
          dt,
          temp,
          weather
        })).slice(0, 8);

        const weatherNow = current.weather[0];

        const weatherDetails = {
          sunrise: current.sunrise,
          sunset: current.sunset,
          dew_point: current.dew_point,
          humidity: current.humidity,
          wind_speed: current.wind_speed,
          pressure: current.pressure,
          feels_like: current.feels_like,
          temp: current.temp,
          visibility: current.visibility,
        }

        return {
          payload: {
            timezone,
            weatherPerHour,
            weatherNow,
            weatherDetails
          }
        }
      }
    }
  },
})

export const { putWeatherData, setWeatherError, setWeatherLoading } = weatherSlice.actions

export default weatherSlice.reducer