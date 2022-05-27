import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from './../assets/HomeIcon.svg';
import { ReactComponent as PersonIcon } from './../assets/PersonIcon.svg';
import { ReactComponent as StarIcon } from './../assets/StarIcon.svg';

interface FooterProps {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Footer = ({ setFooterHeight }: FooterProps) => {
  const navigate = useNavigate();
  const footerRef = useRef<HTMLElement>(null);
  console.log('footer height', footerRef.current?.clientHeight);
  const height =
    footerRef.current?.clientHeight === undefined
      ? 0
      : footerRef.current.clientHeight;
  setFooterHeight(height);
  return (
    <Container ref={footerRef}>
      <Tabs>
        {/* <Tab onClick={() => {navigate("/home")}} current={location.pathname !== "/home" ? 1 : 0}> */}
        <Tab
          onClick={() => {
            navigate('/home');
          }}
        >
          <StarIcon />
          <MenuText>즐겨찾기</MenuText>
        </Tab>
        <Link to={'/home'}>
          <Tab>
            <HomeIcon />
            <MenuText>홈</MenuText>
          </Tab>
        </Link>
        <Link to={'/profile'}>
          <Tab>
            <PersonIcon />
            <MenuText>프로필</MenuText>
          </Tab>
        </Link>
      </Tabs>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Tabs = styled.ul`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  background-color: #fff;
`;

const Tab = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.875rem 3.125rem;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;

const MenuText = styled.span`
  margin-top: 0.316rem;
`;
