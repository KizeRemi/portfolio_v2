import { configure, addDecorator } from '@storybook/react';
import React, { Fragment } from 'react';

import { GlobalStyle } from '../components/Global';

function withGlobalStyles(storyFn) {
  return (
    <Fragment>
      <GlobalStyle />
      {storyFn()}
    </Fragment>
  );
}

addDecorator(withGlobalStyles);

configure(require.context('../stories', true, /\.stories\.js$/), module);
