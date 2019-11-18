import React from 'react';
import { number } from "@storybook/addon-knobs";

import { CompanyBanner } from '../components/Company';

import elevenLabsLogo from '../public/images/elevenlabs-full-logo.svg';
import soundchartsLogo from '../public/images/soundcharts-full-logo.svg';
import laCentraleLogo from '../public/images/lacentrale-full-logo.svg';

export default {
  title: 'Company',
};

const companiesLogoDefault = [
  elevenLabsLogo, laCentraleLogo
];

export const Company = () => {
  const label = 'Images number';
  const defaultValue = 5;
  const options = {
    range: true,
    min: 2,
    max: 10,
  };
  const imagesNumber = number(label, defaultValue, options, 'companies-logo');
  const imagesLogo = [];
  for(let i = 2; i < imagesNumber; i++) {
    imagesLogo.push(soundchartsLogo);
  }

  return (
    <CompanyBanner companiesLogo={[
      ...companiesLogoDefault, ...imagesLogo
    ]} />
  )
};
