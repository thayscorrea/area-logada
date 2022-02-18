import { RiUpload2Fill } from 'react-icons/ri'

import * as S from './UploadFile.styles'

export function UploadFile(props){
  const { label } = props

  return (
    <S.Wrapper>
      <S.Content>
        <RiUpload2Fill size={20} color="#ffcb1a" />
        <S.Title>{label}</S.Title>
      </S.Content>
    </S.Wrapper>
  )
}
