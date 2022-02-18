import styled from "styled-components"

export const Wrapper = styled.div``

export const ListDocuments = styled.div`
  display: flex;
  gap: 200px;
  margin-top: 10rem;
`

export const Document = styled.div`
  display: table-caption;

  button {
    height: 4rem;
    background: #df9696;

    :hover {
      background: #df9696;
    }
  }
`

export const StatusDocument = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const NameDocument = styled.p`
  text-align: center;
  padding-bottom: 8px;
`

export const WrapperDocument = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
`
