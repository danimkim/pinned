import styled from 'styled-components';

interface SubmitBtnProps {
  children: string;
  onClick?: () => void;
}

const SubmitBtn = (props: SubmitBtnProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default SubmitBtn;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #04202f;
  color: #fff;
  padding: 0.625rem 1rem;
  border-radius: 1.5rem;
  font-weight: 700;
  margin: 0 auto 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;
