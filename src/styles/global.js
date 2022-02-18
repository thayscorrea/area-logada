import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #F4F5F6;
    color: #333;
  }

  body,
  button,
  input,
  textarea,
  select {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
  }

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
`
