import React from 'react';

import SectionHeader from '../components/Title/SectionHeader';
import BodyLayout from '../components/Layout/BodyLayout';

export default {
  title: 'Title',
};

export const SectionHeaderOverlay = () => (
  <BodyLayout>
    <SectionHeader title="J'ai travaillé pour" overlay="I have worked for" />
  </BodyLayout>
);
