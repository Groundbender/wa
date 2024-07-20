import styled from "styled-components";

export const DetailsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media(max-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media(max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`