import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`

export const Form = styled.form`
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  width: 100%;
  max-width: 340px;
  display: grid;
  justify-content: center;
  padding: 30px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoWrapper = styled.div`
  width: 14rem;
`

export const Button = styled.button`
  padding: 0 32px;
  height: 48px;
  background-color: #4285f4;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  margin-top: 20px;
  color: #fff;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: 500;

  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }

  &:active {
    background: #1669F2;
  }
`
