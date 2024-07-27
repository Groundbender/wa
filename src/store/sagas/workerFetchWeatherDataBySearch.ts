import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { WeatherActionTypes, WeatherWorkersPayload } from "../types";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchWeatherData } from "@/api/api";
import { API_KEY } from "@/const/const";
import { putWeatherData, setWeatherError, setWeatherLoading } from "../slices/weatherSlice";
import { AxiosResponse } from "axios";

export const fetchWeatherDataBySearchAction = createAction<WeatherWorkersPayload>(WeatherActionTypes.FETCH_WEATHER_DATA_BY_SEARCH);

export function* workerFetchWeatherDataBySearch(action: PayloadAction<WeatherWorkersPayload>)  {
  try {
    const { location, temperatureUnit } = action.payload;
    
    yield put(setWeatherLoading());
    const { data } = yield call(
      fetchWeatherData,
      `weather?q=${location}&units=${temperatureUnit}&appid=${API_KEY}`
    );

    const lat = data.coord.lat;
    const lon = data.coord.lon;

    const weatherDataCall: AxiosResponse = yield call(
      fetchWeatherData,
      `onecall?lat=${lat}&lon=${lon}&units=${temperatureUnit}&appid=${API_KEY}`
    );

    yield put(putWeatherData(weatherDataCall.data));
  } catch (error) {
    yield put(setWeatherError());
  }
}

export function* watcherWeatherDataBySearch() {
  yield takeEvery(WeatherActionTypes.FETCH_WEATHER_DATA_BY_SEARCH, workerFetchWeatherDataBySearch);
}