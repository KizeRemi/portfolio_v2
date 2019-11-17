import styled from 'styled-components';

const CardLayout = styled.div`
  font-family: SFProDisplayMedium;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.centered ? 'center' : 'left'};
  max-width: ${props => `${props.maxWidth}px` || '100%' };
  box-shadow: 10px 10px 36px 0px rgba(198,198,198, 0.5);
  border-radius: ${props => props.noLeftRadius ? '0 10px 10px 0' :  '10px'};
  padding: ${props => props.padded && '2rem'};flex-basis: auto;
`;

export default CardLayout;
