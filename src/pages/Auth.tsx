import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import RoundButton from '../elements/RoundButton';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={`${process.env.PUBLIC_URL}/logo-color.png`} alt="로고" />
      {/* <TextWrapper>
        <li>간편하고 한 눈에 보기 쉬운</li>
        <li>
          나만의 <Strong>장소 즐겨찾기 서비스</Strong>를
        </li>
        <li>이용해보세요</li>
      </TextWrapper> */}

      <Wrapper>
        <div>
          <RoundButton height="30px" borderColor="yellow" bgColor="FEE501">
            카카오 로그인
          </RoundButton>
          <RoundButton height="30px">Google 로그인</RoundButton>
          <RoundButton height="30px" onClick={() => navigate('/signup')}>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
    margin-bottom: 0.3rem;
  }
  button + button + button {
    margin-bottom: 1rem;
  }
`;

const Login = styled.span`
  text-decoration: underline;
  margin-left: 0.5rem;
  font-weight: 700;
`;

const TextWrapper = styled.ul`
  margin-bottom: 3.625rem;
  li {
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

const Strong = styled.strong`
  color: #c89e86;
`;
