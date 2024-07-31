import { GlobalStyles } from "./styles/GlobalStyles"
import { useEffect, useState } from "react"
import { useAppSelector, useDebounce, useGeolocation } from "./hooks"
import { fetchWeatherDataAction } from "./store/sagas/workerFetchWeatherData"
import { WeatherLoader } from "./ui/WeatherLoader"
import { ThemeProvider } from "./context/themeContext/ThemeProvider"
import { Header } from "./widgets/Header"
import { WeatherDetails } from "./widgets/WeatherDetails"
import { WeatherToday } from "./widgets/WeatherToday"
import { Divider } from "./ui/Divider"
import { PageWrapper } from "./ui/PageWrapper"
import { Container } from "./ui/Container"
import { WeatherNotFound } from "./ui/WeatherNotFound"
import { TemperatureUnit } from "./types/weather"
import { Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"

const App = () => {
  const { currentPosition } = useGeolocation();

  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("metric")
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch()
  const status = useAppSelector(state => state.weather.status)

  const debouncedValue = useDebounce(searchValue)

  useEffect(() => {
    if (!currentPosition) return
    if (debouncedValue.trim()) return

    dispatch(fetchWeatherDataAction({
      position: currentPosition,
      temperatureUnit,
    }))
  }, [currentPosition, temperatureUnit, debouncedValue, dispatch])

  return (
    <ThemeProvider>
      <GlobalStyles />
      <PageWrapper>
        <Container>
          <Header
            debouncedValue={debouncedValue}
            setSearchValue={setSearchValue}
            currentPosition={currentPosition}
            setTemperatureUnit={setTemperatureUnit} temperatureUnit={temperatureUnit} />
          {status === "error" &&
            <WeatherNotFound />}
          {status === "loading" && <WeatherLoader />}
          {status === "idle" &&
            <>
              <WeatherToday />
              <Divider />
              <WeatherDetails />
            </>}
        </Container>
      </PageWrapper>
      <Toaster
        position="bottom-right"
        gutter={12}
        toastOptions={{
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "var(--font-size-16)",
            maxWidth: "18rem",
            padding: "1rem 1.5rem ",
            background: "var(--primary-color)",
            color: "var(--secondary-color)",
          }
        }}
      />
    </ThemeProvider>
  )
}

export default App