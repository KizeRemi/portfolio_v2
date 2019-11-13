import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'SFProDisplayMedium';
     src: url('fonts/SF-Pro-Display-Medium.otf');
     font-display: fallback;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export class PortFolioApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default PortFolioApp;
