import styled from "styled-components";

export interface TextProps {
  size?: number
}

export const Text = styled.p<TextProps>`
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height);
  font-family: var(--font-family);
  font-style: var(--font-style-normal);
  font-size: 1rem;
  font-size: var(--${props => "font-size-" + props.size});
  color: var(--primary-color);
`