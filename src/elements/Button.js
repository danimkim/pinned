import styled from 'styled-components';

const Button = (props) => {
    return (
        <div>
            <StyledButton>{props.children}</StyledButton>
        </div>
    )
}

export default Button;

const StyledButton = styled.button`
    border: solid 1px red;
    display: block;
    height: 50px;
    &:hover{
        cursor: pointer;
    }
`