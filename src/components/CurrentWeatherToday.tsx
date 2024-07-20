import { CurrentWeatherContainer, DateBlock, WeatherTitle, DateTextWrapper, GeolocationBlock } from "@/ui/CurrentWeather"
import LocationIcon from "@/assets/Location.svg"
import { FC } from "react"
import { Text } from "@/ui/Text"
import { Image } from "@/ui/Image"
import styled from "styled-components"
import { getTodaysDayOfWeek } from "@/helpers"

const CurrentWeatherIcon = styled(Image)`
    width: clamp(3.125rem, 2.3665rem + 3.2362vw, 6.25rem);
    aspect-ratio: 1;
`
interface CurrentWeatherProps {
  weatherIcon: string
  temperature: number
  location: string
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ weatherIcon, temperature, location }) => {
  return (
    <CurrentWeatherContainer>
      <DateBlock>
        <DateTextWrapper>
          <Text size={25}>Today</Text>
          <Text size={15}>{getTodaysDayOfWeek()}</Text>
        </DateTextWrapper>
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