import { FaGoogle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { FormGroup } from '../../components/FormGroup'
import { Input } from '../../components/Input'

import { Logo } from '../../assets/Logo'

import { useAuth } from '../../hooks/useAuth'

import * as S from './Login.styles'

export function Login (){
  const { user, signInWithGoogle } = useAuth()
  const history = useHistory()

  function handleLogin(){
    console.log(user)

    if(!user){
      signInWithGoogle()
    }

    history.push('/dashboard')
  }

  return (
    <S.Wrapper>
      <S.Form>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <FormGroup>
          <Input placeholder="E-mail" />
        </FormGroup>

        <FormGroup>
          <Input placeholder="Senha" />
        </FormGroup>

        <S.Button type="button" onClick={handleLogin}>
          <FaGoogle size={20} />
          Continuar com Google
        </S.Button>
      </S.Form>
    </S.Wrapper>
  )
}
