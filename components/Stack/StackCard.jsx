import React from 'react';

import CardLayout from '../Layout/CardLayout';
import StackImageLayout from './StackImageLayout';
import StackDescription from './StackDescription';
import StackTitle from './StackTitle';

const StackCard = ({ logo, name, description }) => (
  <CardLayout padded centered maxWidth={290}>
    <StackImageLayout>
      <img src={logo} />
    </StackImageLayout>
    <StackTitle>{name}</StackTitle>
    <StackDescription>
      {description} 
    </StackDescription>
  </CardLayout>
);

export default StackCard;
