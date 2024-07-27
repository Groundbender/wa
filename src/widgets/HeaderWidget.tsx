import { FC, useCallback, useEffect } from "react"
import styled from "styled-components"
import { DarkModeSwitcher } from "@/components/DarkModeSwitcher"
import { SearchInput } from "@/components/SearchInput"
import { TemperatureUnitSwitcher } from "@/components/TemperatureUnitSwitcher"
import { StyledHeader } from "@/ui/Header"
import { PosistionCoordinates, TemperatureUnit } from "@/types/weather"
import { fetchWeatherDataBySearchAction } from "@/store/sagas/workerFetchWeatherDataBySearch"
import { useDispatch } from "react-redux"

interface HeaderWidgetProps {
  setTemperatureUnit: (unit: TemperatureUnit) => void;
  setSearchValue: (value: string) => void;
  temperatureUnit: TemperatureUnit;
  currentPosition: PosistionCoordinates;
  debouncedValue: string
}

const SwitchersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;`

export const HeaderWidget: FC<HeaderWidgetProps> = ({ temperatureUnit, setTemperatureUnit, currentPosition, setSearchValue, debouncedValue }) => {
  const dispatch = useDispatch();

  const handleSwitchTemperatureUnit = useCallback((unit: TemperatureUnit) => {
    setTemperatureUnit(unit)
  }, [temperatureUnit])

  const handleSearchValue = useCallback((value: string) => {
    setSearchValue(value)
  }, [])

  useEffect(() => {
    if (!debouncedValue.trim()) return

    dispatch(fetchWeatherDataBySearchAction({
      location: debouncedValue,
      temperatureUnit,
      position: currentPosition
    }))
  }, [debouncedValue, temperatureUnit, currentPosition])

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