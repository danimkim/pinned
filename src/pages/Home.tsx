import styled from 'styled-components';
import SearchIcon from "../@types/assets/SearchIcon.svg";
import Button from '../elements/Button'

const Home = () => {
    return (
    <div>
        <Greeting>안녕하세요 Tina님</Greeting>
        <SubGreeting>오늘의 마음의 드는 장소는 어디인가요?</SubGreeting>
        <InputBox>
            <SearchIcon />
            <Input type="text" placeholder="Search..."/>
        </InputBox>
        <Button>저장한 장소</Button>
        <Button>방문한 장소</Button>
        <Button>지역별</Button>
        <Button>카테고리별</Button>
        <Button>내 취저 장소</Button>
    </div>
    )
}

export default Home;

const InputBox = styled.div`
    border: solid 1px #A2ADB1;
    height: 3.125rem;
    border-radius: 1.5rem;
    padding-left: 1rem;
    background-color: #fff;
`

const Input = styled.input`
    border: solid 1px blue;
    height: inherit;
    margin-left: 0.8rem;
    width: calc(100% - 2rem);
`

const Greeting = styled.p`
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
`

const SubGreeting = styled.p`
    font-size: 1.875rem;
    margin-bottom: 2rem;
`

