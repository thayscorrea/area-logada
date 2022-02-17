import * as S from './FormGroup.styles'

export function FormGroup(props){
  const { children, error } = props

  return (
    <S.Wrapper>
      {children}
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.Wrapper>
  )
}
