import { FC } from "react"
import { TemperatureUnit } from "@/types/weather"
import { SwitcherBlock, TemperatureUnitSwitcherBtn } from "@/ui/TemperatureUnitSwitcher"

interface TemperatureUnitSwitcherProps {
  handleSwitchTemperatureUnit: (unit: TemperatureUnit) => void
  temperatureUnit: TemperatureUnit
}

export const TemperatureUnitSwitcher: FC<TemperatureUnitSwitcherProps> = ({ handleSwitchTemperatureUnit, temperatureUnit }) => {
  return (
    <SwitcherBlock>
      <TemperatureUnitSwitcherBtn onClick={() => handleSwitchTemperatureUnit("metric")} $activeUnit={temperatureUnit === "metric"}>
        C
      </TemperatureUnitSwitcherBtn>
      /
      <TemperatureUnitSwitcherBtn onClick={() => handleSwitchTemperatureUnit("imperial")} $activeUnit={temperatureUnit === "imperial"}>
        F
      </TemperatureUnitSwitcherBtn>
    </SwitcherBlock>
  )
}