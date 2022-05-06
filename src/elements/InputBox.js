import styled from 'styled-components';
import { MailIcon, PersonEmptyIcon, LockIcon } from '../components/assets';

const InputBox = (props) => {
    // nickname, email, pw, pwconfirm
    const warningMsgNickname = "3글자 이상 입력해주세요.";
    const warningMsgEmail = "이메일을 올바르게 입력해주세요."
    const warningMsgPw = "비밀번호는 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."


    return (
        <div>
            <Label htmlFor={props.id}>{props.children}</Label>
            <InputContainer>
                {props.id === "nickname" && <PersonEmptyIcon />}
                {props.id === "email" && <MailIcon />}
                {(props.id === "pw" || props.id === "pwconfirm") && <LockIcon />}
                <Input type={props.type} id={props.id}/>
            </InputContainer>            
            <Warn>{warningMsgNickname}</Warn>
        </div>
    )
}

export default InputBox;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px #A2ADB1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding-left: 1rem;
    background-color: #fff;
    & + label {
        margin-bottom: 1rem;
    }
`

const Input = styled.input`
    height: inherit;
    margin-left: 0.8rem;
    width: calc(100% - 2rem);
`

const Label = styled.label`
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 17px;
    margin-bottom: 0.5rem;
    & + p {
        margin-top: 1rem;
    }
`

const Warn = styled.p`
    /* display: none; */
    color: red;
    padding-left: 17px;
    font-size: 0.8rem;
    font-weight: 700;
    div + & {
        margin: 0.5rem 0 0.8rem;
    }
`

Input.defaultProps = `
    type: "text"
`
