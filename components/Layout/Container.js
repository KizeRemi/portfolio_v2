import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: ${props => props.centered ? 'center': 'left'};
  background: ${props => props.gradient ? 'linear-gradient(45deg, #D07FF3, #495BCB)' : 'transparent'};
`;

export default Container;
