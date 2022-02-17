import React from 'react'; 
import Logo from '../assets/Logo';
import S from './Login.style'

const Login = () => {
  return (
    <S.Login>
      <S.WrapperLogo>
        <Logo/>
      </S.WrapperLogo>

      <S.Button>
        <S.WrapperIconGoogle>
          <S.IconGoogle src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </S.WrapperIconGoogle>
        <a href={''} target={'_blank'}>Login com Google</a>
      </S.Button>
    </S.Login>
  );
}

export default Login