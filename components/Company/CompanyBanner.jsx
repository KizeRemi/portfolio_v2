import React from 'react';
import CardLayout from '../Layout/CardLayout';

import CompanyImage from './CompanyImage';

const CompanyBanner = ({ companiesLogo }) => (
  <CardLayout row padded>
    {companiesLogo.map(companyLogo => <CompanyImage src={companyLogo} />)}
  </CardLayout>
);

export default CompanyBanner;
