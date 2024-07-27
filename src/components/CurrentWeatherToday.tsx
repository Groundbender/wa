import { CurrentWeatherContainer, DateBlock, WeatherTitle, DateTextContainer, GeolocationBlock } from "@/ui/CurrentWeather"
import LocationIcon from "@/assets/Location.svg"
import { FC } from "react"
import { Text } from "@/ui/Text"
import { Image } from "@/ui/Image"
import styled from "styled-components"
import { getTodaysDayOfWeek } from "@/helpers"

const CurrentWeatherIcon = styled(Image)`
    width: var(--icon-size-lg);`

interface CurrentWeatherProps {
  weatherIcon: string
  temperature: number
  location: string
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ weatherIcon, temperature, location }) => {
  return (
    <CurrentWeatherContainer>
      <DateBlock>
        <DateTextContainer>
          <Text size={25}>Today</Text>
          <Text size={15}>{getTodaysDayOfWeek()}</Text>
        </DateTextContainer>
        <CurrentWeatherIcon src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="Current weather icon" />
      </DateBlock>
      <WeatherTitle>
        {temperature}°
      </WeatherTitle>
      <GeolocationBlock>
        <LocationIcon />
        {location}
      </GeolocationBlock>
    </CurrentWeatherContainer>
  )
}