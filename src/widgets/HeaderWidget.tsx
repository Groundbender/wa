import { FC } from "react"
import styled from "styled-components"
import { DarkModeSwitcher } from "@/components/DarkModeSwitcher"
import { SearchInput } from "@/components/SearchInput"
import { TemperatureUnitSwitcher } from "@/components/TemperatureUnitSwitcher"
import { StyledHeader } from "@/ui/Header"
import { TemperatureUnit } from "@/types"

interface HeaderWidgetProps {
  handleSwitchTemperatureUnit: (unit: TemperatureUnit) => void
  temperatureUnit: TemperatureUnit
  handleSearchValue: (value: string) => void
}

const SwitchersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const HeaderWidget: FC<HeaderWidgetProps> = ({ handleSwitchTemperatureUnit, temperatureUnit, handleSearchValue }) => {
  return (
    <StyledHeader>
      <SearchInput handleSearchValue={handleSearchValue} />
      <SwitchersContainer>
        <TemperatureUnitSwitcher handleSwitchTemperatureUnit={handleSwitchTemperatureUnit} temperatureUnit={temperatureUnit} />
        <DarkModeSwitcher />
      </SwitchersContainer>
    </StyledHeader>
  )
}