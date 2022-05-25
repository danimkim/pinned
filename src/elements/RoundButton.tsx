import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: string;
  height?: string;
  borderColor?: string;
  bgColor?: string;
  color?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${(props) => props.height};
  border: solid 1px
    ${(props) =>
      props.borderColor === 'yellow'
        ? props.theme.yellow
        : props.theme.darknavy};
  border-radius: 2rem;
  background-color: ${(props) => {
    if (props.bgColor === 'yellow') {
      return props.theme.yellow;
    } else if (props.bgColor === 'darkNavy') {
      return props.theme.darknavy;
    } else {
      return 'none';
    }
  }};
  color: ${(props) => (props.color === 'white' ? '#fff' : 'initial')};
  &:hover {
    cursor: pointer;
  }
`;

const RoundButton = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default RoundButton;
