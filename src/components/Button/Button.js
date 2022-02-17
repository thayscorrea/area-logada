import styled from "styled-components"

export const Button = styled.button`
  cursor: pointer;
  background: dodgerblue;
  border-radius: 4px;
  height: 5rem;
  padding: 0 32px;
  border: 0;
  outline: 0;
  transition: background 0.2s ease-in;
  color: white;
  font-weight: 500;

  &:hover {
    background: orangered;
  }
`
