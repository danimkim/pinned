import { ReactComponent as ArrowLeftIcon } from './../assets/ArrowLeftIcon.svg';
import { ReactComponent as SearchIcon } from './../assets/SearchIcon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

interface HeaderProps {
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ setHeaderHeight }: HeaderProps) => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  console.log('header height', headerRef.current?.clientHeight);
  const height =
    headerRef.current?.clientHeight === undefined
      ? 0
      : headerRef.current.clientHeight;
  setHeaderHeight(height);

  return (
    <HeaderBar ref={headerRef}>
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
