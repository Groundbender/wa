import { DetailsCard, DetailsInfo, DetailsInfoValue, DetailsTitle } from "@/ui/WeatherDetailsCard"
import { FC } from "react"

interface WeatherDetailsCardProps {
  weatherDataText: string,
  weatherDataValue: string,
  icon: JSX.Element
  measureUnit: string
}

export const WeatherDetailsCard: FC<WeatherDetailsCardProps> = ({ weatherDataText, weatherDataValue, icon, measureUnit }) => {
  return (
    <DetailsCard>
      <DetailsTitle>{weatherDataText}</DetailsTitle>
      <DetailsInfo>
        <DetailsInfoValue>
          {weatherDataValue} {measureUnit}
        </DetailsInfoValue>
        {icon}
      </DetailsInfo>
    </DetailsCard>
  )
}