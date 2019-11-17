import React from 'react';
import { text } from "@storybook/addon-knobs";

import SectionHeader from '../components/Title/SectionHeader';
import BodyLayout from '../components/Layout/BodyLayout';

export default {
  title: 'Title',
};

export const SectionHeaderOverlay = () => (
  <BodyLayout>
    <SectionHeader title={text('Title', 'J\'ai travaillé pour')} overlay={text('Overlay text', 'I have worked for')} />
  </BodyLayout>
);
