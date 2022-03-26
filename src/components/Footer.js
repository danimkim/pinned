import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { HomeIcon, PersonIcon, StarIcon } from "./assets";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <footer>
            <Tabs>
                <Tab onClick={() => {navigate("/home")}} current={location.pathname !== "/home" ? 1 : 0}>
                    <StarIcon />
                    <MenuText>즐겨찾기</MenuText>
                </Tab>
                <Tab onClick={() => {navigate("/")}}><HomeIcon /><MenuText>홈</MenuText></Tab>
                <Tab onClick={() => {navigate("/profile")}}><PersonIcon /><MenuText>프로필</MenuText></Tab>
            </Tabs>
        </footer>
    )
}

export default Footer;

const Tabs = styled.ul`
    display: flex;
    border: solid 1px red;
    justify-content: space-around;
    box-sizing: border-box;
    background-color: #fff;
`

const Tab = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.875rem 3.125rem;
    box-sizing: border-box;
    &:hover{
        cursor: pointer;
    }
`

const MenuText = styled.span`
    margin-top: 0.316rem;
`


