import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ maxWidth = 1120 }) => css`
    --container: ${maxWidth}px;

    max-width: calc(var(--container) + (2.4rem * 2));
    margin-left: auto;
    margin-right: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  `}
`
