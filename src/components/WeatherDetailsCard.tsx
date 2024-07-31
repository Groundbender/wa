import { DetailsCard, DetailsInfo, DetailsInfoValue, DetailsTitle } from "@/ui/WeatherDetailsCard"
import { FC, ReactNode } from "react"

interface WeatherDetailsCardProps {
  weatherDetailTitle: string,
  weatherDetailValue: string,
  icon: ReactNode
  measureUnit: string
}

export const WeatherDetailsCard: FC<WeatherDetailsCardProps> = ({ weatherDetailTitle, weatherDetailValue, icon, measureUnit }) => {
  return (
    <DetailsCard>
      <DetailsTitle>{weatherDetailTitle}</DetailsTitle>
      <DetailsInfo>
        <DetailsInfoValue>
          {weatherDetailValue} {measureUnit}
        </DetailsInfoValue>
        {icon}
      </DetailsInfo>
    </DetailsCard>
  )
}