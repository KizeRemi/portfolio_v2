import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: ${props => props.padded ? '1rem': '0'}};
  justify-content: ${props => props.centered ? 'center': 'left'};
  background: ${props => props.gradient ? 'linear-gradient(45deg, #D07FF3, #495BCB)' : 'transparent'};
  ${props => props.margin && 'margin: 4rem 0 5rem 0'}};
  &:first-child {
    margin-left: 0;
  }
  > * {
    margin: 1rem;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export default Container;
