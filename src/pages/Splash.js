import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/signup");
    }, [1500]);
  });

  return (
      <ImgContainer>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="핀드" />
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
  animation-delay: 0.5s;
`
