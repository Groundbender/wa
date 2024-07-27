import styled from "styled-components"
import { useAppSelector } from "@/hooks/redux"
import { DetailsList } from "@/ui/WeatherDetailsList"
import { WeatherDetailsCard } from "@/components/WeatherDetailsCard"
import { WeatherDetailCard } from "@/types/weather"
import { formatTimeUS } from "@/helpers"
import { WeatherDetailsTitle } from "@/ui/WeatherDetailsTitle"
import SunriseIcon from "@/assets/Sunrise.svg"
import SunsetIcon from "@/assets/Sunset.svg"
import RaindropIcon from "@/assets/Raindrop.svg"
import HumidityIcon from "@/assets/Humidity.svg"
import WindIcon from "@/assets/Wind.svg"
import PressureIcon from "@/assets/Pressure.svg"
import TemperatureHighIcon from "@/assets/TemperatureHigh.svg"
import VisibilityIcon from "@/assets/Visibility.svg"

const detailsCards: WeatherDetailCard[] = [
  {
    title: "SUNRISE",
    value: "sunrise",
    icon: <SunriseIcon />,
    isTimestamp: true
  },
  {
    title: "SUNSET",
    value: "sunset",
    icon: <SunsetIcon />,
    isTimestamp: true
  },
  {
    title: "DEW POINT",
    value: "dew_point",
    icon: <RaindropIcon />,
    measureUnit: "%",
    isTimestamp: false

  },
  {
    title: "HUMIDITY",
    value: "humidity",
    icon: <HumidityIcon />,
    measureUnit: "%",
    isTimestamp: false
  },
  {
    title: "WIND",
    value: "wind_speed",
    icon: <WindIcon />,
    measureUnit: "km/h",
    isTimestamp: false
  },
  {
    title: "PRESSURE",
    value: "pressure",
    icon: <PressureIcon />,
    measureUnit: "hPa",
    isTimestamp: false
  },
  {
    title: "FEELS LIKE",
    value: "feels_like",
    icon: <TemperatureHighIcon />,
    measureUnit: "°",
    isTimestamp: false
  },
  {
    title: "VISIBILITY",
    value: "visibility",
    icon: <VisibilityIcon />,
    measureUnit: "km",
    isTimestamp: false
  },
]

const WeatherDetailsContainer = styled.div`
  width: 100%;
  padding-bottom: 5rem;
  padding-top: 5rem;

  @media(max-width: 720px) {
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
  }`

export const WeatherDetailsWidget = () => {
  const weatherDetails = useAppSelector(state => state.weather.weatherData.weatherDetails)

  const weatherDetailsCards = detailsCards.map((card) => {
    const value = card.isTimestamp ? formatTimeUS(weatherDetails?.[card.value]) : weatherDetails?.[card.value].toString()
    return (
      <WeatherDetailsCard
        key={card.value}
        weatherDetailTitle={card.title}
        weatherDetailValue={value}
        icon={card.icon}
        measureUnit={card.measureUnit} />
    )
  })

  return (
    <WeatherDetailsContainer>
      <WeatherDetailsTitle>
        Weather details
      </WeatherDetailsTitle>
      <DetailsList>
        {weatherDetailsCards}
      </DetailsList>
    </WeatherDetailsContainer>
  )
}