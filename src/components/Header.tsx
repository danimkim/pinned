import { ReactComponent as ArrowLeftIcon } from './../assets/ArrowLeftIcon.svg';
import { ReactComponent as SearchIcon } from './../assets/SearchIcon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  // console.log('header height', headerRef.current?.clientHeight);

  return (
    <HeaderBar>
      {/* <button onClick={()=>{navigate(-1)}} current={location.pathname !== "home" ? 1 : 0}><ArrowLeftIcon /></button> */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeftIcon />
      </button>
      <SearchIcon />
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  padding: 15px 18px;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
