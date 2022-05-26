import styled from 'styled-components';

interface ButtonProps {
  children: string;
  order: number;
  colStart?: number;
  colEnd?: number;
}

const PinButton = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default PinButton;

const StyledButton = styled.button<ButtonProps>`
  grid-column: ${(props) => props.colStart} / ${(props) => props.colEnd};
  border-radius: 0.8rem;
  height: 50px;
  background-color: ${(props) => {
    if (props.order === 1) return props.theme.pinColor.pink;
    if (props.order === 2) return props.theme.pinColor.yellow;
    if (props.order === 3) return props.theme.pinColor.skyblue;
    if (props.order === 4) return props.theme.pinColor.darkblue;
    if (props.order === 5) return props.theme.pinColor.red;
    if (props.order === 6) return props.theme.pinColor.coral;
  }};
  &:hover {
    cursor: pointer;
  }
`;
