import * as S from './Documents.styles'

export function Documents(props){
  const { data } = props

  return (
    <S.Wrapper>
      {data.map((document) => (
        <S.Document key={document.type}>
          {document.type}
        </S.Document>
      ))}
    </S.Wrapper>
  )
}
