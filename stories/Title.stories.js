import React from 'react';
import styled from 'styled-components';
import { text } from "@storybook/addon-knobs";

import SectionHeader from '../components/Title/SectionHeader';
import BodyLayout from '../components/Layout/BodyLayout';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 2rem 0;
`;

export default {
  title: 'Title',
};

export const SectionHeaderOverlay = () => (
  <Wrapper>
    <SectionHeader title={text('Title', 'J\'ai travaillé pour')} overlay={text('Overlay text', 'I have worked for')} />
  </Wrapper>
);
