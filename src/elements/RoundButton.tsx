import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: string;
  height?: string;
  borderColor?: string;
  bgColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${(props) => props.height};
  border: solid 1px
    ${(props) =>
      props.borderColor === 'yellow'
        ? props.theme.pinColor.darkblue
        : props.theme.pinColor.coral};
  border-radius: 1rem;
  background-color: ${(props) => props.bgColor};
  &:hover {
    cursor: pointer;
  }
`;

const RoundButton = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default RoundButton;
