import React from 'react';

import CardLayout from '../Layout/CardLayout';
import ImageLayout from '../Layout/ImageLayout';
import StackDescription from './StackDescription';
import StackTitle from './StackTitle';

const StackCard = ({ logo, name, description }) => (
  <CardLayout padded centered maxWidth={290}>
    <ImageLayout colored>
      <img src={logo} />
    </ImageLayout>
    <StackTitle>{name}</StackTitle>
    <StackDescription>
      {description} 
    </StackDescription>
  </CardLayout>
);

export default StackCard;
