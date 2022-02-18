import { RiCheckFill, RiRestartLine } from 'react-icons/ri'


import * as S from './ListDocuments.styles'

import { Container } from '../../components/Container'
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

import rgImage from '../../assets/rg.jpeg'
import holeriteImage from '../../assets/holerite.jpeg'

export function ListDocuments(){
  return (
    <S.Wrapper>
      <Header />
      <Container maxWidth={1000}>
        <S.ListDocuments>
          <S.Document>
            <S.NameDocument>RG</S.NameDocument>
            <img src={rgImage} alt="RG" />

            <S.WrapperDocument>
              <Button type="submit" disabled>Remover</Button>
              <S.StatusDocument> Documento Validado <RiCheckFill color={'#03c113f2'} size={'3rem'} /></S.StatusDocument>
            </S.WrapperDocument>
          </S.Document>

          <S.Document>
            <S.NameDocument>Holerite 03/2020</S.NameDocument>
            <img src={holeriteImage} alt="Holerite" />

            <S.WrapperDocument>
              <Button type="submit" disabled>Remover</Button>
              <S.StatusDocument> Aguardando Análise... <RiRestartLine color='rgb(107 164 235 / 95%)' size={'3rem'}/> </S.StatusDocument>
            </S.WrapperDocument>
          </S.Document>
        </S.ListDocuments>
      </Container>
    </S.Wrapper>
  )
}
