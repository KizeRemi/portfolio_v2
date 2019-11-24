import styled from 'styled-components';

const ImageLayout = styled.div`
  width: 90px;
  min-height: 90px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.colored ? 'linear-gradient(45deg, #D07FF3, #495BCB)' : 'black'};
  margin: 0.5rem 0;
  flex: 1 33%;
`;

export default ImageLayout;
