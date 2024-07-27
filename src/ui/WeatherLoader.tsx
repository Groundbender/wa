import styled from "styled-components";

const Spinner = styled.div`
  width: 6.25rem;
  padding: .5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--primary-color);
  mask: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
    mask: var(mask);
          mask: var(mask);
    mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;

@keyframes l3 {to{transform: rotate(1turn)}}`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;`

export const WeatherLoader = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  )
}