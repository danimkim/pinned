import styled from 'styled-components';
import { SearchIcon } from '../components/assets';

const Home = () => {
    return <div>
        <p>안녕하세요 Tina님</p>
        <p>오늘의 마음의 드는 장소는 어디인가요?</p>
        <InputBox>
            <SearchIcon />
            <Input type="text" placeholder="Search..."/>
        </InputBox>
    </div>
}

export default Home;

const InputBox = styled.div`
    border: solid 1px red;
    height: 3.125rem;
    border-radius: 1.5rem;
    padding-left: 1rem;
`

const Input = styled.input`
    border: solid 1px blue;
    height: inherit;
    margin-left: 0.8rem;
`

