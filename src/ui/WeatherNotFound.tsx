import styled from "styled-components";
import { Text } from "@/ui/Text"
import { Image } from "@/ui/Image";
import ImageNotFound from "@/assets/not-found-2x.png"

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const NotFoundImage = styled(Image)`
  width: clamp(10rem, 4.1262rem + 9.0615vw, 15rem);
  aspect-ratio: 1;
  object-fit: cover;
  margin-bottom: 6.25rem;

  @media(max-width: 500px) {
    margin-bottom: 3.125rem;
  }
  `

const NotFoundText = styled(Text)`
    margin-bottom: .625rem;
  `

export const WeatherNotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundImage src={ImageNotFound} alt="Not found" />
      <NotFoundText size={26}>City not found</NotFoundText>
      <Text size={20}>Did you make a typo?</Text>
    </NotFoundContainer>
  )
}