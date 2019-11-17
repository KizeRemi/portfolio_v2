import styled from 'styled-components';

const Button = styled.button`
  border: none;
  height: 45px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  background: ${props => props.link ? 'transparent' : 'linear-gradient(45deg, #D07FF3 -40px, #5E50FF)'};
  color: ${props => props.link ? '#6A6EF0' : '#FFFFFF'}
`;

export default Button;
