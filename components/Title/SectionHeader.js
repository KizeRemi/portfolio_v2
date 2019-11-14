import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-family: SFProDisplayMedium;
  font-size: 26px;
  color: #252A3F;
  text-transform: uppercase;
  margin: 0;
  line-height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 2rem 0;
`;

const OverlayTitle = styled.div`
  font-family: SFProDisplayMedium;
  font-size: 76px;
  color: #7586F8;
  text-transform: uppercase;
  opacity: 0.07;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  line-height: 0;
`;

const SectionHeader = ({ title, overlay }) => (
  <Wrapper>
    <SectionTitle>{title}</SectionTitle>
    <OverlayTitle>{overlay}</OverlayTitle>
  </Wrapper>
);

export default SectionHeader;
