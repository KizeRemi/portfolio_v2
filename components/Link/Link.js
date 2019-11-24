import styled from 'styled-components';

const Link = styled.a`
  font-size: 20px;
  text-decoration: underline;
  color: ${props => (props.active && '#824ED4') || (props.default && '#82869F' ) || '#FFFFFF'};
  line-height: 10px;
  letter-spacing: 0.55px;
`;

export default Link;
