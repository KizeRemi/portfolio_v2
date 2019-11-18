import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import OverlayTitle from './OverlayTitle';
import { Container } from '../Layout';

const SectionHeader = ({ title, overlay }) => (
  <Container>
    <SectionTitle>{title}</SectionTitle>
    <OverlayTitle>{overlay}</OverlayTitle>
  </Container>
);

export default SectionHeader;
