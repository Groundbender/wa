import { GlobalStyles } from "./styles/GlobalStyles"
import { useCallback, useEffect, useState } from "react"
import { useGeolocation } from "./hooks/useGeolocation"
import { useDebounce } from "./hooks/useDebounce"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { fetchWeatherDataAction } from "./store/sagas/workerFetchWeatherData"
import { fetchWeatherDataBySearchAction } from "./store/sagas/workerFetchWeatherDataBySearch"
import { WeatherLoader } from "./ui/WeatherLoader"
import { DarkModeProvider } from "./context/darkMode/DarkModeProvider"
import { HeaderWidget } from "./widgets/HeaderWidget"
import { WeatherDetailsWidget } from "./widgets/WeatherDetailsWidget"
import { WeatherTodayWidget } from "./widgets/WeatherTodayWidget"
import { Divider } from "./ui/Divider"
import { PageWrapper } from "./ui/PageWrapper"
import { Container } from "./ui/Container"
import { WeatherNotFound } from "./ui/WeatherNotFound"
import { TemperatureUnit } from "./types"

const App = () => {
  const { currentPosition: position } = useGeolocation();
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("metric")
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue)

  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.weather.status)

  useEffect(() => {
    if (!position) {
      return
    }
    if (debouncedValue.trim()) {
      console.log("debouncedValue", debouncedValue);
      dispatch(fetchWeatherDataBySearchAction({
        location: debouncedValue,
        temperatureUnit,
        position
      }))
    } else {
      dispatch(fetchWeatherDataAction({
        position,
        temperatureUnit,
      }))
    }


  }, [position, temperatureUnit, debouncedValue])

  // useEffect(() => {
  //   if (!debouncedValue.trim()) {
  //     return
  //   }
  //   dispatch(fetchWeatherDataBySearchAction({
  //     location: debouncedValue,
  //     temperatureUnit,
  //     position
  //   }))
  // }, [debouncedValue])

  const handleSearchValue = useCallback((value: string) => {
    setSearchValue(value)
  }, [])

  const handleSwitchTemperatureUnit = useCallback((unit: TemperatureUnit) => {
    setTemperatureUnit(unit)
  }, [temperatureUnit])

  return (
    <DarkModeProvider>
      <GlobalStyles />
      <PageWrapper>
        <Container>
          <HeaderWidget
            handleSearchValue={handleSearchValue}
            handleSwitchTemperatureUnit={handleSwitchTemperatureUnit} temperatureUnit={temperatureUnit} />
          {status === "error" &&
            <WeatherNotFound />}
          {status === "loading" && <WeatherLoader />}
          {status === "idle" &&
            <>
              <WeatherTodayWidget />
              <Divider />
              <WeatherDetailsWidget />
            </>}
        </Container>
      </PageWrapper>
    </DarkModeProvider>
  )
}

export default App
