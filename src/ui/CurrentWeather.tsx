import styled from "styled-components";

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media(max-width: 1060px) {
    flex-direction: row;
  }

  @media(max-width: 500px) {
    gap: 1rem;
  }`

export const DateBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media(max-width: 1060px) {
    gap: 0;
  }`

export const DateTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: var(--primary-color);
  font-size: var(--font-size-25);
  align-items: center;`

export const WeatherTitle = styled.h1`
  color: var(--primary-color);
  font-size: var(--font-size-90)`

export const GeolocationBlock = styled.div`
  font-size: var(--font-size-26);
  color: var(--primary-color);
  display: flex;
  align-items: center;

  svg {
    display: inline-block;
    margin-right: 10px;
    fill: var(--primary-color)
  }

  @media(max-width: 1060px) {
    svg {
      margin-right: 5px;
    }
  }`