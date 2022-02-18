import styled from "styled-components"

export const Wrapper = styled.div``

export const Card = styled.div`
  background: #fff;
  margin-top: 6.4rem;
  padding: 6.4rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.6rem;
  }

  > p {
    color: #7A7A80;
    font-size: 1.8rem;
    margin: 1.6rem 0 3.2rem 0;
  }
`

export const RememberLater = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 1.4rem;
  margin-top: 1.6rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`
