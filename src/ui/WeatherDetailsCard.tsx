import styled from "styled-components";

export const DetailsCard = styled.li`
  background: var(--description-color);
  width: 100%;
  padding: 2.2rem 1.5rem;

  @media (max-width: 1060px) {
    padding: 1.5rem 1rem;
  }
`

export const DetailsTitle = styled.h5`
  text-transform: var(--text-uppercase);
  font-size: var(--font-size-19);
  font-weight: var(--font-weight-medium);
  margin-bottom: 1.2rem;
  color: var(--color-secondary);
  opacity: 0.6;
`

export const DetailsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: clamp(1.25rem, 0.7949rem + 1.9417vw, 3.125rem);
    aspect-ratio: 1;
    fill: var(--color-secondary);
  }
`

export const DetailsInfoValue = styled.p`
  font-size: var(--font-size-34);
  font-weight: var(--font-weight-medium);
  `
