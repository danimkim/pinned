import styled from 'styled-components'
import { Link } from 'react-router-dom';
import InputBox from '../elements/InputBox';

const SignUp = () => {
    return (
        <div>
            {/* <Logo src={`${process.env.PUBLIC_URL}/logo.png`} alt="로고" /> */}
            <TextWrapper>
                <li>간편하고 한 눈에 보기 쉬운</li>
                <li>나만의 <Strong>장소 즐겨찾기 서비스</Strong>를</li>
                <li>이용해보세요</li>
            </TextWrapper>
            <form>
                <fieldset>
                    <legend style={{display:"none"}}>회원가입 폼</legend>
                    <InputBox id="nickname">닉네임</InputBox>
                    <InputBox id="email">이메일</InputBox>
                    <InputBox type="password" id="pw">비밀번호</InputBox>
                    <InputBox type="password" id="pwconfirm">비밀번호</InputBox>                    
                </fieldset>
                <SubmitBtn type="submit">회원가입</SubmitBtn>
            </form>

            <Wrapper>
                <span>이미 회원이신가요?</span><Link to={"/signup"}><Login>로그인</Login></Link>
            </Wrapper>
        </div>
    )
}

export default SignUp;

const Logo = styled.img`
    display: block;
    margin: 50vh auto 0;
    transform: translateY(-25vh);
`

const SubmitBtn = styled.button`
    display: block;
    background-color: #04202F;
    color: #fff;
    padding: 0.625rem 1rem;
    border-radius: 1.5rem;
    font-weight: 700;
    width: 80%;
    margin: 0 auto 0.8rem;
    &:hover {
        cursor: pointer;
    }
`

const Wrapper = styled.div`
    text-align: center;
`

const Login = styled.span`
    text-decoration: underline;
    margin-left: 0.5rem;
    font-weight: 700;
`

const TextWrapper = styled.ul`
    margin-bottom: 3.625rem;
    li {
        font-weight: 700;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }
`

const Strong = styled.strong`
    color: #C89E86;
`

const Warn = styled.p`
    color: red;
    font-size: 0.8rem;
    font-weight: 700;
    div + & {
        margin: 0.5rem 0 0.8rem;
    }
`
