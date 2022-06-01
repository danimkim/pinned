import { useNavigate } from 'react-router-dom';
import InputBox from '../elements/InputBox';
import RoundButton from '../elements/RoundButton';
import { auth } from '../fbase';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <>
      <form action="">
        <InputBox id="nickname" type="text" />
        <InputBox id="pw" type="password" />
      </form>
      <RoundButton
        onClick={() => {
          auth.signOut();
          navigate('/auth');
        }}
      >
        로그아웃
      </RoundButton>
      <Link to="/">
        <span>계정 삭제</span>
      </Link>
    </>
  );
};

export default EditProfile;
