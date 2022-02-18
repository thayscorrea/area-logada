import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'

import { Container } from '../Container'
import { Logo } from '../Logo'

import * as S from './Header.styles'

export function Header(){
  const { user, signOutFirebase } = useAuth()

  return (
    <S.Wrapper>
      <Container>
        <Link to="/">
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
        </Link>

        <S.Profile>
          <S.SignOut type="button" onClick={signOutFirebase}>Sair</S.SignOut>
          <Link to="/listar-documentos">
            <S.Avatar src={user.avatar} alt="Sua foto de perfil" referrerPolicy='no-referrer' />
          </Link>
        </S.Profile>
      </Container>
    </S.Wrapper>
  )
}
