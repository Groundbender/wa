import { FC } from "react"
import { TemperatureUnit } from "@/types"
import { SwitcherBlock, SwitcherBtn } from "@/ui/TemperatureUnitSwitcher"


interface TemperatureUnitSwitcherProps {
  handleSwitchTemperatureUnit: (unit: TemperatureUnit) => void
  temperatureUnit: TemperatureUnit
}

export const TemperatureUnitSwitcher: FC<TemperatureUnitSwitcherProps> = ({ handleSwitchTemperatureUnit, temperatureUnit }) => {
  return (
    <SwitcherBlock>
      <SwitcherBtn onClick={() => handleSwitchTemperatureUnit("metric")} $activeUnit={temperatureUnit === "metric"}>
        C
      </SwitcherBtn>
      /
      <SwitcherBtn onClick={() => handleSwitchTemperatureUnit("imperial")} $activeUnit={temperatureUnit === "imperial"}>
        F
      </SwitcherBtn>
    </SwitcherBlock>
  )
}