import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import React, { Fragment } from 'react';

import { GlobalStyle } from '../components/Global';

function withGlobalStyles(storyFn) {
  return (
    <div>
      <GlobalStyle />
      {storyFn()}
    </div>
  );
}
const styles = {
  margin: '3rem 2rem',
};

const withCentered = (storyFn) => <div style={styles}>{storyFn()}</div>;

addDecorator(withCentered);
addDecorator(withGlobalStyles);
addDecorator(withKnobs({
  escapeHTML: false,
}));

configure(require.context('../stories', true, /\.stories\.js$/), module);
