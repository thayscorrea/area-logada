import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'

import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

import documentImg from '../../assets/document.png'

import * as S from './Dashboard.styles'

export function Dashboard(){
  const { user } = useAuth()

  return (
    <S.Wrapper>
      <Header />

      <Container maxWidth={800}>
        <S.Card>
          <img src={documentImg} alt="" />
          <h1>
            Olá {user.name}, para agilizar em futuras compras, precisamos validar
            seus dados.
          </h1>
          <p>Leva só alguns minutos.</p>
          <Button as={Link} to="/enviar-documentos">Continuar</Button>
          <S.RememberLater type="button">Lembrar mais tarde</S.RememberLater>
        </S.Card>
      </Container>
    </S.Wrapper>
  )
}
