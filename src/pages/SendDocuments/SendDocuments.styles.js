import styled from "styled-components"
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { Button } from "../../components/Button"
import * as FormGroup from "../../components/FormGroup/FormGroup.styles"

export const Wrapper = styled.div``

export const Title = styled.h1`
  margin-top: 6.4rem;
  font-size: 3.2rem;
  font-weight: 500;
`

export const Description = styled.p`
  margin-top: 0.8rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${FormGroup.Wrapper} + ${FormGroup.Wrapper} {
    margin-top: 2.4rem;
  }

  ${Button}{
    margin-top: 3.2rem;
    width: 100%;
  }
`

export const Tabs = styled(TabsPrimitive.Root)`
  display: 'flex';
  flex-direction: 'column';
  width: 300;
  background-color: #fff;
  margin-top: 3.2rem;
`

export const TabsList = styled(TabsPrimitive.List)`
  flex-shrink: 0;
  display: flex;
`

export const TabsTrigger = styled(TabsPrimitive.Trigger)`
  all: unset;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  background: #fff;

  &[data-state="active"] {
    background: #F6BE00;
  }
`

export const TabsContent = styled(TabsPrimitive.Content)`
  flex-grow: 1;
  background-color: 'white';
  border-bottom-left-radius: 6;
  border-bottom-right-radius: 6;
  outline: 'none';
  padding: 3.2rem;
`
