import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ReactComponent as PersonEmptyIcon } from './../assets/PersonEmptyIcon.svg';
import { ReactComponent as MailIcon } from './../assets/MailIcon.svg';
import { ReactComponent as LockIcon } from './../assets/LockIcon.svg';
import { auth } from '../fbase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SubmitBtn = styled.button`
  display: block;
  background-color: #04202f;
  color: #fff;
  height: 3rem;
  padding: 0.625rem 1rem;
  border-radius: 1.5rem;
  font-weight: 700;
  width: 100%;
  margin: 2rem auto 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #a2adb1;
  height: 2.75rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
  background-color: #fff;
  & + label {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 17px;
  margin-bottom: 0.5rem;
  & + p {
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  height: inherit;
  margin-left: 0.8rem;
  width: calc(100% - 2rem);
`;

const Warn = styled.p`
  color: red;
  padding-left: 17px;
  font-size: 0.8rem;
  font-weight: 700;
  div + & {
    margin: 0.5rem 0 0.8rem;
  }
`;

interface IAuthForm {
  nickname: string;
  email: string;
  pw: string;
  pwConfirm: string;
  extraError?: string;
}

const AuthForm = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IAuthForm>();

  const onValid = (data: IAuthForm) => {
    if (data.pw !== data.pwConfirm) {
      setError(
        'pwConfirm',
        { message: '비밀번호가 일치하지 않습니다.' },
        { shouldFocus: true },
      );
    }
    // 서버에 문제 있을시 회원가입 불가능 에러 띄우기
    // setError('extraError', {
    //   message: '일시적인 오류로 회원가입이 불가능합니다.',
    // });

    createUserWithEmailAndPassword(auth, data.email, data.pw)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: data.nickname,
        }).then(() => navigate('/home'));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <fieldset>
        <legend style={{ display: 'none' }}>회원가입</legend>
        <Label htmlFor="nickname">닉네임</Label>
        <InputContainer>
          <PersonEmptyIcon />
          <Input
            {...register('nickname', {
              required: '닉네임을 입력해주세요.',
              minLength: {
                value: 3,
                message: '3글자 이상 입력해주세요.',
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{3,10}$/,
                message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
              },
            })}
            placeholder="닉네임을 입력해주세요"
          />
        </InputContainer>
        <Warn>{errors?.nickname?.message}</Warn>
        <Label htmlFor="email">이메일</Label>
        <InputContainer>
          <MailIcon />
          <Input
            {...register('email', {
              required: '이메일을 올바르게 입력해주세요.',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: '이메일을 올바르게 입력해주세요.',
              },
            })}
            placeholder="이메일을 입력해주세요"
          />
        </InputContainer>
        <Warn>{errors?.email?.message}</Warn>
        <Label htmlFor="pw">비밀번호</Label>
        <InputContainer>
          <LockIcon />
          <Input
            type="password"
            {...register('pw', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
            })}
            placeholder="비밀번호를 입력해주세요"
          />
        </InputContainer>
        <Warn>{errors?.pw?.message}</Warn>
        <Label htmlFor="pwConfirm">비밀번호 확인</Label>
        <InputContainer>
          <LockIcon />
          <Input
            type="password"
            {...register('pwConfirm', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
            })}
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </InputContainer>
        <Warn>{errors?.pwConfirm?.message}</Warn>
      </fieldset>
      <SubmitBtn type="submit">회원가입</SubmitBtn>
      {errors?.extraError?.message && <p>{errors?.extraError?.message}</p>}
    </form>
  );
};

export default AuthForm;
