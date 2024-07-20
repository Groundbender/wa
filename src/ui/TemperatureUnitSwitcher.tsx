import styled from "styled-components"

export const SwitcherBlock = styled.div`
  width: 10.1875rem;
  height: 2.375rem;
  border-radius: 20px;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  @media(max-width: 580px) {
    width: 8rem;
  }

  @media(max-width: 500px) {
    width: 6rem;
  }
`

export const SwitcherBtn = styled.button<{ $activeUnit?: boolean }>`
    background: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: ${(props) => props.$activeUnit ? "var(--text-active-color)" : "var(--text-inactive-color)"};
`


