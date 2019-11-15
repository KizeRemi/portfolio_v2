import React from 'react';

import { StackCard } from '../components/Stacks';

import ReactLogo from '../public/images/react-logo.svg';

export default {
  title: 'Stack',
  decorator: []
};

export const Stack = () => (
  <StackCard
    logo={ReactLogo}
    description="Relativement simple à utiliser et rapide, j'utilise React et React Native pour les applications Front."
    name="React"
  />
);
