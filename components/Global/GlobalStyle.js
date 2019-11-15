import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFProDisplayMedium';
    src: url('fonts/SF-Pro-Display-Medium.otf');
    font-display: fallback;
  }
`;

export default GlobalStyle;
