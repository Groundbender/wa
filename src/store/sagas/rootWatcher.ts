import { all } from "redux-saga/effects";
import { watcherWeatherData } from "./workerFetchWeatherData";
import { watcherWeatherDataBySearch } from "./workerFetchWeatherDataBySearch";

export function* rootWatcher() {
  yield all([watcherWeatherData(), watcherWeatherDataBySearch()]);
}