import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../components/Global';

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
