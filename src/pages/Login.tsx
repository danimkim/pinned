import InputBox from "../elements/InputBox";
import styled from "styled-components";

const Login = () => {
    return (
        <div>
            <TextWrapper>
                <li>환영합니다!</li>
                <li>언젠가 꼭 가 보고 싶은 장소를</li>
                <li>핀하러 가 볼까요?</li>
            </TextWrapper>
            <form>
                <fieldset>
                    <legend style={{display: "none"}}>로그인</legend>
                    <InputBox id="email">이메일</InputBox>
                    <InputBox id="pw">비밀번호</InputBox>
                </fieldset>
            </form>
        </div>
    )

}

export default Login;

const TextWrapper = styled.ul`
    margin-bottom: 3.625rem;
    li {
        font-weight: 700;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }
`