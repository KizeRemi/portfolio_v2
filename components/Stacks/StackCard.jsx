import React from 'react';

import StackCardLayout from './StackCardLayout';
import StackImageLayout from './StackImageLayout';
import StackDescription from './StackDescription';
import StackTitle from './StackTitle';

const StackCard = ({ logo, name, description }) => (
  <StackCardLayout>
    <StackImageLayout>
      <img src={logo} />
    </StackImageLayout>
    <StackTitle>{name}</StackTitle>
    <StackDescription>
      {description} 
    </StackDescription>
  </StackCardLayout>
);

export default StackCard;
