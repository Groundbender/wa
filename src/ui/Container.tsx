import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--container-width);
  margin-inline: auto;

  @media (max-width: 580px) {
    max-width: 90%;
  }
`
