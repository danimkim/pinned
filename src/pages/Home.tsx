import styled from 'styled-components';
import { ReactComponent as SearchIcon } from './../assets/SearchIcon.svg';
import PinButton from '../elements/PinButton';
import { auth } from './../fbase';

const InputBox = styled.div`
  border: solid 1px #a2adb1;
  height: 3.125rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
  background-color: #fff;
`;

const Input = styled.input`
  height: inherit;
  margin-left: 0.8rem;
  width: calc(100% - 2rem);
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`;

const SubGreeting = styled.p`
  font-size: 1.875rem;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const Home = () => {
  return (
    <>
      {auth.currentUser ? (
        <>
          <Greeting>안녕하세요 {auth.currentUser?.displayName}님</Greeting>
          <SubGreeting>오늘의 마음의 드는 장소는 어디인가요?</SubGreeting>
          <InputBox>
            <SearchIcon />
            <Input type="text" placeholder="Search..." />
          </InputBox>
          <ButtonContainer>
            <PinButton order={1} colStart={1} colEnd={3}>
              저장한 장소
            </PinButton>
            <PinButton order={2} colStart={1} colEnd={3}>
              방문한 장소
            </PinButton>
            <PinButton order={3}>지역별 핀</PinButton>
            <PinButton order={4}>카테고리별 핀</PinButton>
            <PinButton order={5}>마음에 든 장소</PinButton>
            <PinButton order={6}>스페셜 핀</PinButton>
          </ButtonContainer>
        </>
      ) : (
        '404 잘못된 접근입니다.'
      )}
    </>
  );
};

export default Home;
