import React from 'react';
import { action } from '@storybook/addon-actions';
import StackCardLayout from '../components/Stacks/StackCardLayout';
import StackImageLayout from '../components/Stacks/StackImageLayout';

import ReactLogo from '../public/images/react-logo.svg';
import StackDescription from '../components/Stacks/StackDescription';
import StackTitle from '../components/Stacks/StackTitle';
export default {
  title: 'Stack',
};

export const StackCard = () => (
  <StackCardLayout>
    <StackImageLayout>
      <img src={ReactLogo} />
    </StackImageLayout>
    <StackTitle>React</StackTitle>
    <StackDescription>
      Relativement simple à utiliser et rapide, j'utilise React et React Native pour les applications Front.
    </StackDescription>
  </StackCardLayout>
);
