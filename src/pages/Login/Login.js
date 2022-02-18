import { FaGoogle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import { FormGroup } from '../../components/FormGroup'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

import { useAuth } from '../../hooks/useAuth'

import * as S from './Login.styles'

export function Login (){
  const { user, signInWithGoogle } = useAuth()
  const history = useHistory()

  function handleLogin(){
    if(!user){
      signInWithGoogle()
    }

    history.push('/')
  }

  return (
    <S.Wrapper>
      <S.Form>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <S.Description>
          Faça seu login para começar uma experiência incrível.
        </S.Description>

        <FormGroup>
          <Input placeholder="E-mail" />
        </FormGroup>

        <FormGroup>
          <Input placeholder="Senha" />
        </FormGroup>

        <a href="/">Esqueci minha senha</a>

        <Button type="submit">Entrar</Button>

        <S.Divider>Ou</S.Divider>

        <Button type="button" color="google" onClick={handleLogin}>
          <FaGoogle size={20} />
          Continuar com Google
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}
