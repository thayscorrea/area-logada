import styled, { css } from "styled-components"

export const Button = styled.button`
  ${({ color = 'primary' }) => css`
    color: #333;
    cursor: pointer;
    border: 1px solid transparent;
    height: 6.4rem;
    outline: 0;
    padding: 0 32px;
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    ${color === 'primary' && css`
      background: #F6BE00;
      transition: filter 0.2s ease-in;

      &:hover {
        filter: brightness(0.9)
      }

      &:focus {
        border-color: #333;
      }
    `}

    ${color === 'google' && css`
      background: transparent;
      border-color: #333;
      transition: background 0.2s ease-in, color 0.2s ease-in;

      &:hover {
        background: #333;
        color: #fff;
      }
    `}
  `}
`
