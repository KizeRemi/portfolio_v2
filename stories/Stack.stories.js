import React from 'react';
import { text } from "@storybook/addon-knobs";

import { StackCard } from '../components/Stack';

import ReactLogo from '../public/images/react-logo.svg';

export default {
  title: 'Stack',
  decorators: []
};

export const Stack = () => (
  <StackCard
    logo={ReactLogo}
    description={text('Description', 'Relativement simple à utiliser et rapide, j\'utilise React et React Native pour les applications Front.')}
    name={text('Name', 'React')}
  />
);
