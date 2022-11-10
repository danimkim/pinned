import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import RoundButton from '../elements/RoundButton';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './../fbase';

const Auth = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <Container>
      <Logo src={`${process.env.PUBLIC_URL}/logo-color.png`} alt="로고" />

      <Wrapper>
        <div>
          <RoundButton height="35px" borderColor="yellow" bgColor="yellow">
            카카오 로그인
          </RoundButton>
          <RoundButton height="35px" onClick={handleGoogleLogin}>
            Google 로그인
          </RoundButton>
          <RoundButton
            height="35px"
            bgColor="darkNavy"
            color="white"
            onClick={() => navigate('/signup')}
          >
            이메일 회원가입
          </RoundButton>
        </div>
        <span>이미 회원이신가요?</span>
        <Link to={'/login'}>
          <Login>로그인</Login>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  margin-top: 50%;
  transform: translateY(-25%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: solid 1px blue; */
`;

const Logo = styled.img`
  width: 10rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 5rem;
  text-align: center;
  button {
    margin-bottom: 0.8rem;
  }
  button + button + button {
    margin-bottom: 2rem;
  }
`;

const Login = styled.span`
  text-decoration: underline;
  margin-left: 0.5rem;
  font-weight: 700;
`;
