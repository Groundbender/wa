import { FC } from "react"
import styled, { css } from "styled-components"
import SearchIcon from "@/assets/SearchIcon.svg"

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid var( --primary-color);
  color: var(--primary-color);
  display: inline-block;
  position: relative;
  padding: 0 25px 0 10px; 
  font-size: var(--font-size-16);

  &::placeholder {
    color: var(--primary-color);
  }`

export const InputContainer = styled.div<InputProps>`
  width: 70%;
  height: 30px;
  background: inherit;

  @media(max-width: 800px) {
    width: 50%;
  }
  
  ${({ type }) => type === "text" && css`
    position: relative;
    
    svg {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      fill: var(--primary-color);
    }`
  }`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: FC<InputProps> = (props) => {
  return (
    <InputContainer type={props.type} >
      <StyledInput {...props} />
      <SearchIcon />
    </InputContainer>
  )
}