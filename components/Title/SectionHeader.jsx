import React from 'react';

import SectionTitle from './SectionTitle';
import OverlayTitle from './OverlayTitle';
import { Container } from '../Layout';

const SectionHeader = ({ title, overlay }) => (
  <Container padded margin>
    <SectionTitle>{title}</SectionTitle>
    <OverlayTitle>{overlay}</OverlayTitle>
  </Container>
);

export default SectionHeader;
