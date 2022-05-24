import styled from "styled-components";

interface ButtonProps {
  children: string;
  borderColor?: string;
  height?: string;
  bgColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${(props) => props.height};
  border: solid 1px
    ${(props) => (props.borderColor === "yellow" ? "red" : props.theme.black)};
  border-radius: 1rem;
  background-color: ${(props) => props.bgColor};
  &:hover {
    cursor: pointer;
  }
`;

const RoundButton = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default RoundButton;
