import { ArrowLeftIcon, SearchIcon } from "./assets";
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <HeaderBar>
            <button onClick={()=>{navigate(-1)}} current={location.pathname !== "home" ? 1 : 0}><ArrowLeftIcon /></button>
            
            <SearchIcon />
        </HeaderBar>
    )
}

export default Header;

const HeaderBar = styled.header`
    padding: 20px 18px;
    display: flex;
    justify-content: space-between;
    &:hover {
        cursor: pointer;
    }
`