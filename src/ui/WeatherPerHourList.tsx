import styled from "styled-components";

export const StyledWeatherPerHourList = styled.ul`
   display: flex;
   gap: 1.25rem;
   
   @media(max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
   }
   
`

