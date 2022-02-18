import styled from "styled-components"

import { Container } from "../Container"

export const Wrapper = styled.header`
  background: #fff;
  border-bottom: 1px solid #EBEBF0;

  ${Container}{
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const LogoWrapper = styled.div`
  width: 12rem;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const SignOut = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  outline: 0;
`

export const Avatar = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`
