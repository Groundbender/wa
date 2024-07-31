import styled from "styled-components"

export const ThemeSwitcherCheckbox = styled.input.attrs({
  type: "checkbox",
  id: "checkbox",
})`
  opacity: 0;
  position: absolute;
  
  &:checked + label  > span  {
     left: 2rem;
  }`

export const ThemeSwitcherLabel = styled.label.attrs({
  htmlFor: "checkbox",
})`
  background-color: var(--primary-color);
  width: 3.75rem;
  height: 1.625rem;
  border-radius: 3.125rem;
  position: relative;
  padding: .3125rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;`

export const ThemeSwitcherBall = styled.span`
  background-color: var(--color-secondary);
  width: 1.375rem;
  height: 1.375rem;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: left 0.2s linear;`