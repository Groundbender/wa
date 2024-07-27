import { WeatherPerHour } from "@/types/weather"
import { StyledWeatherPerHourList } from "@/ui/WeatherPerHourList"
import { FC } from "react"
import { WeatherPerHourItem } from "./WeatherPerHoutItem"

interface WeatherPerHourListProps {
  weatherPerHour: WeatherPerHour[]
}

export const WeatherPerHourList: FC<WeatherPerHourListProps> = ({ weatherPerHour }) => {
  return (
    <StyledWeatherPerHourList>
      {weatherPerHour?.map(({ dt, temp, weather }) => (
        <WeatherPerHourItem key={temp} time={dt} temperature={temp} weatherIcon={weather[0]?.icon} />
      ))}
    </StyledWeatherPerHourList>
  )
}