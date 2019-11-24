import React from 'react';
import styled from 'styled-components';
import { text } from "@storybook/addon-knobs";

import SectionHeader from '../components/Title/SectionHeader';

export default {
  title: 'Title',
};

export const SectionHeaderOverlay = () => (
  <SectionHeader title={text('Title', 'J\'ai travaillé pour')} overlay={text('Overlay text', 'I have worked for')} />
);
