import styled from 'styled-components';

interface ButtonProps {
  children: string,
}

const Button = (props:ButtonProps) => {
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