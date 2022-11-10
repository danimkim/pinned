import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from './../assets/HomeIcon.svg';
import { ReactComponent as PersonIcon } from './../assets/PersonIcon.svg';
import { ReactComponent as StarIcon } from './../assets/StarIcon.svg';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
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
