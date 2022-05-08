import PersonIcon from "../@types/assets/PersonIcon.svg"
import styled from 'styled-components'
import SubmitBtn from "../elements/SubmitBtn";

const Profile = () => {
    return (
        <div>
            <Wrapper>
                <ProfilePic>
                    <PersonIcon />
                    <AddBtn>+</AddBtn>
                </ProfilePic>            
                <div>
                    <Name>Tina Kim</Name>
                </div>
            </Wrapper>
            <SubmitBtn>회원정보 수정</SubmitBtn>
        </div>

    )
}

export default Profile;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    align-items: center;
`

const ProfilePic = styled.div`
    background-color: #fff;
    padding: 2rem;
    display: inline-block;
    border-radius: 2rem;
    position: relative;
    margin-bottom: 1.2rem;
`

const AddBtn = styled.button`
    background-color: #04202F;
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
`

const Name = styled.p`
    text-align: center;
    font-weight: 700;
`
