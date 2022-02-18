import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 38.4rem;

  display: flex;
  flex-direction: column;

  & > a {
    color: #7A7A80;
    display: inline-block;
    margin: 2.4rem 0;
    outline: 0;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export const LogoWrapper = styled.div`
  width: 14rem;
  margin: 0 auto;
`

export const Description = styled.p`
  color: #7A7A80;
  text-align: center;
  margin: 2.4rem auto;
  max-width: 25.4rem;
`

export const Divider = styled.div`
  color: #999;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 1.6rem 0;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &::after,
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background: #CCC;
  }
`
