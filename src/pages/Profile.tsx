import { ReactComponent as PersonIcon } from './../assets/PersonIcon.svg';
import styled from 'styled-components';
import SubmitBtn from '../elements/SubmitBtn';
import { auth } from './../fbase';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import { useState } from 'react';

const Profile = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Wrapper>
        <ProfilePic>
          <PersonIcon />
          <AddBtn>+</AddBtn>
        </ProfilePic>
        <div>
          <Name>{auth.currentUser?.displayName}</Name>
        </div>
      </Wrapper>
      {!display && (
        <SubmitBtn
          onClick={() => {
            navigate('edit');
            setDisplay((prev) => !prev);
          }}
        >
          회원정보 수정
        </SubmitBtn>
      )}
      <Outlet context={<EditProfile />} />
    </div>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  align-items: center;
`;

const ProfilePic = styled.div`
  background-color: #fff;
  padding: 2rem;
  display: inline-block;
  border-radius: 2rem;
  position: relative;
  margin-bottom: 1.2rem;
`;

const AddBtn = styled.button`
  background-color: #04202f;
  color: #fff;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.8rem;
  position: absolute;
  bottom: -5px;
  right: -5px;
  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.p`
  text-align: center;
  font-weight: 700;
`;
