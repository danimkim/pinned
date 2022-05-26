import styled from 'styled-components';
import SearchIcon from './../assets/SearchIcon.svg';

const Search = () => {
  return (
    <div>
      <InputBox>
        <SearchIcon />
        <Input type="text" placeholder="Search..." />
      </InputBox>
    </div>
  );
};

export default Search;

const InputBox = styled.div`
  border: solid 1px #a2adb1;
  height: 3.125rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
  background-color: #fff;
`;

const Input = styled.input`
  border: solid 1px blue;
  height: inherit;
  margin-left: 0.8rem;
  width: calc(100% - 2rem);
`;
