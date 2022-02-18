import styled from "styled-components"

import { Label } from "../Label"

export const Wrapper = styled.div`
  & + & {
    margin-top: 0.8rem;
  }

  ${Label}{
    margin-bottom: 0.8rem;
  }
`

export const ErrorMessage = styled.span``
