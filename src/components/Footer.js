import styled from 'styled-components'
import { HomeIcon, PersonIcon, StarIcon } from "./assets";

const Footer = () => {
    return (
        <footer>
            <Tabs>
                <Tab>
                    <StarIcon />
                    <MenuText>즐겨찾기</MenuText>
                </Tab>
                <Tab><HomeIcon /><MenuText>홈</MenuText></Tab>
                <Tab><PersonIcon /><MenuText>프로필</MenuText></Tab>
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
`

const Tab = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.875rem 3.125rem;
    box-sizing: border-box;
`

const MenuText = styled.span`
    margin-top: 0.316rem;
`


