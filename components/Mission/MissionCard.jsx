import React from 'react';
import styled from 'styled-components';

import { CompanyImage } from '../Company';
import CardLayout from '../Layout/CardLayout';

const GradientLayout = styled.div`
  background: linear-gradient(45deg, #5E50FF 20%, #EA74F4);
  padding: 1rem;
  flex: 1;
  color: white;
  min-height: 270px; 
`;
const MissionImageLayout = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MissionTitle = styled.h4`
  font-weight: bold;
  font-size: 16px;
  margin: 0.5rem 0;
`;

const MissionDuration = styled.h4`
  font-size: 13px;
  margin: 0.5rem 0;
`;

const MissionOccupation = styled.div`
  font-size: 20px;
  margin: 1rem 0;
`;

const MissionDescription = styled.p`
  font-size: 11px;
`;

const MissionCard = ({ company, duration, occupation, children, companyLogo }) => (
  <CardLayout row noLeftRadius maxWidth={530}>
    <GradientLayout>
      <MissionTitle>{company}</MissionTitle>
      <MissionDuration>{duration}</MissionDuration>
      <MissionOccupation>{occupation}</MissionOccupation>
      <MissionDescription>{children}</MissionDescription>
    </GradientLayout>
    {companyLogo && (
      <MissionImageLayout>
        <CompanyImage src={companyLogo} alt="Company logo"/>
      </MissionImageLayout>
    )}
  </CardLayout>
);

export default MissionCard;
