import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Splash = () => {
  const duration = 2000;
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/auth');
    }, duration);
  });

  return (
    <ImgContainer>
      <Logo src={`${process.env.PUBLIC_URL}/logo-red.png`} alt="핀드" />
    </ImgContainer>
  );
};

export default Splash;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  background-color: #04202f;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${fadeOut} 1.2s ease-in-out;
  animation-delay: 1s;
`;

const Logo = styled.img`
  width: 10rem;
`;
