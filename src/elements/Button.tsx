import styled from "styled-components";

interface ButtonProps {
  children: string;
}

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: solid 1px red;
  display: block;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
