import { useForm } from "react-hook-form";
import InputBox from "../elements/InputBox";
import styled from "styled-components";

const SubmitBtn = styled.button`
  display: block;
  background-color: #04202f;
  color: #fff;
  padding: 0.625rem 1rem;
  border-radius: 1.5rem;
  font-weight: 700;
  width: 100%;
  margin: 0 auto 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;

const AuthForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onValue = () => {
    console.log();
  };

  return (
    <form onSubmit={handleSubmit(onValue)}>
      <fieldset>
        <legend style={{ display: "none" }}>회원가입</legend>
        <InputBox id="nickname">닉네임</InputBox>
        <InputBox id="email">이메일</InputBox>
        <InputBox type="password" id="pw">
          비밀번호
        </InputBox>
        <InputBox type="password" id="pwconfirm">
          비밀번호
        </InputBox>
      </fieldset>
      <SubmitBtn type="submit">회원가입</SubmitBtn>
    </form>
  );
};

export default AuthForm;
