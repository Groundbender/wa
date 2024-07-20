import styled from "styled-components"
import { useAppSelector } from "@/hooks/redux"
import { CurrentWeather } from "@/components/CurrentWeatherToday"
import { WeatherPerHourList } from "@/components/WeatherPerHourList"

const WeatherTodayContainer = styled.div`
  width: 100%;
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1060px) {
    flex-direction: column;
    gap: 3.125rem
  }

  @media(max-width: 720px) {
    padding-bottom: 3rem;
  }
`

export const WeatherTodayWidget = () => {
  const timezone = useAppSelector(state => state.weather.weatherData?.timezone)
  const temperature = useAppSelector(state => state.weather.weatherData?.weatherDetails?.temp)
  const weatherPerHour = useAppSelector(state => state.weather.weatherData?.weatherPerHour)
  const weatherNow = useAppSelector(state => state.weather.weatherData?.weatherNow)

  return (
    <WeatherTodayContainer>
      <CurrentWeather location={timezone} weatherIcon={weatherNow?.icon} temperature={temperature} />
      <WeatherPerHourList weatherPerHour={weatherPerHour} />
    </WeatherTodayContainer>
  )
}