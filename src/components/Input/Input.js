import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border: 1px solid #EBEBF0;
  color: #333;
  height: 6.4rem;
  outline: 0;
  padding: 0 1.6rem;

  &:focus {
    border-color: #333;
  }

  &::placeholder {
    color: #AEAEB3;
  }
`
