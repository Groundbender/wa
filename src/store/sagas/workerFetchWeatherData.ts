import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { WeatherActionTypes, WeatherWorkersPayload } from "../types";
import { call, put, takeEvery } from "redux-saga/effects";
import { API_KEY } from "@/const/const";
import { putWeatherData, setWeatherError, setWeatherLoading } from "../slices/weatherSlice";
import { fetchWeatherData } from "@/api/api";

export const fetchWeatherDataAction = createAction<WeatherWorkersPayload>(WeatherActionTypes.FETCH_WEATHER_DATA);

export function* workerFetchWeatherData(action: PayloadAction<WeatherWorkersPayload>) {
  try {
    const { position, temperatureUnit } = action.payload; 
    
    yield put(setWeatherLoading());
    const { data } = yield call(
      fetchWeatherData,
     `onecall?lat=${position.lat}&lon=${position.lng}&units=${temperatureUnit}&appid=${API_KEY}`
    );
    yield put(putWeatherData(data));
  } catch (error) {
    console.log(error);
    yield put(setWeatherError());
  } 
}

export function* watcherWeatherData() {
  yield takeEvery(WeatherActionTypes.FETCH_WEATHER_DATA, workerFetchWeatherData);
}





