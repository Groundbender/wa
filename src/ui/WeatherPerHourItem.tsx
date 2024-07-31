import styled from "styled-components";
import { Image } from "./Image";

export const StyledWeatherPerHourItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px; 
  align-items: center;
  color: var(--primary-color);`

export const WeatherPerHourCard = styled.div<{ $now?: boolean }>`
  background-color: var(--weather-item-bg);
  height: 7.5rem;
  padding: 1rem;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${props => props.$now ? "var(--primary-color-muted)" : "var(--weather-item-bg)"};
  color: ${props => props.$now ? "var(--primary-color)" : "var(--primary-color-muted)"};
  
  @media (max-width: 1060px) {
   padding: 0 10px;
   height: 6.5rem;
}

  @media (max-width: 500px) {
   height: 5.5rem;
}`

export const WeatherPerHourIcon = styled(Image)`
  width: var(--icon-size-sm);`