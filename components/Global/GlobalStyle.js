import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFProDisplayMedium';
    src: url('fonts/SF-Pro-Display-Medium.otf');
    font-display: fallback;
  }

  a {
    text-decoration: none;
    font-family: 'SFProDisplayMedium';
  }
  * {
    border-box: box-sizing;
  }
`;

export default GlobalStyle;
