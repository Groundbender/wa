import { FC } from "react";
import { StyledWeatherPerHourItem, WeatherPerHourCard, WeatherPerHourIcon } from "@/ui/WeatherPerHourItem";
import { Text } from "@/ui/Text";
import { checkCurrentTime, formatTimeUS } from "@/helpers";

interface WeatherPerHourItemProps {
  time: number;
  temperature: number;
  weatherIcon: string;
}

export const WeatherPerHourItem: FC<WeatherPerHourItemProps> = ({ time, temperature, weatherIcon }) => {
  return (
    <StyledWeatherPerHourItem>
      <Text size={12}>
        {formatTimeUS(time)}
      </Text>
      <WeatherPerHourCard $now={checkCurrentTime(time)}>
        <WeatherPerHourIcon src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt="Weather icon" />
        {temperature}°
      </WeatherPerHourCard>
    </StyledWeatherPerHourItem>
  )
}