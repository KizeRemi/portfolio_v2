import styled from 'styled-components';

const HexagonLayout = styled.div`
  position: relative;
  width: 230px; 
  height: 132.79px;
  background-color: #64C7CC;
  margin: 66.40px 0;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
  border-left: solid 10px #333333;
  border-right: solid 10px #333333;

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 162.63px;
    height: 162.63px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 23.6827px;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
  }
  &:before {
    top: -81.3173px;
    border-top: solid 14.1421px #333333;
    border-right: solid 14.1421px #333333;
  }
  &:after {
    bottom: -81.3173px;
    border-bottom: solid 14.1421px #333333;
    border-left: solid 14.1421px #333333;
  }

  span {
    display: block;
    position: absolute;
    top:5.773502691896256px;
    left: 0;
    width:210px;
    height:121.2436px;
    z-index: 2;
    background: inherit;
  }
`;

export default HexagonLayout;
