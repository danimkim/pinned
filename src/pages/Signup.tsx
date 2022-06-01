import AuthForm from '../components/AuthForm';
import styled from 'styled-components';

const Signup = () => {
  return (
    <>
      <TextWrapper>
        <li>간편하고 한 눈에 보기 쉬운</li>
        <li>
          나만의 <Strong>장소 즐겨찾기 서비스</Strong>를
        </li>
        <li>이용해보세요</li>
      </TextWrapper>
      <AuthForm />
    </>
  );
};

export default Signup;

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
