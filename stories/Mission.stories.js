import React from 'react';
import { text } from "@storybook/addon-knobs";

import MissionCard from '../components/Mission/MissionCard';

import CompanyLogo from '../public/images/elevenlabs-logo.svg';

export default {
  title: 'Mission',
};

export const MissionWithLogo = () => {
  const description1 = text('Description 1', `Challenge Mobilité. Développement
  d\’une application permettant aux
  collaborateurs Greenflex de spécifier
  un trajet afin de calculer l’émission de
  Co2 évité.`);

  const description2 = text('Description 2', `Greenflex IQ. Développement du module
  IOT permettant de créer et gérer leurs 
  plans de comptages.`);

  return (
    <MissionCard
      company={text('Company', 'Greenflex')}
      duration={text('Duration', 'Mai 2019 - Aujourd’hui')}
      occupation={text('Occupation', 'Développeur Front/Back')}
      companyLogo={CompanyLogo}
    >
      {description1}
      <br /><br />
      {description2}
    </MissionCard>
  )
};

export const MissionNoLogo = () => {
  const description1 = text('Description 1', `Soundcharts. Application à
  destination des maisons de disques
  permettant d’obtenir des analytics
  (écoutes, playlists, classements et
  réseaux sociaux) sur les artistes qu’ils
  produisent.`);

  const description2 = text('Description 2', null);

  return (
    <MissionCard
      company={text('Company', 'Soundcharts')}
      duration={text('Duration', 'Avril 2018- Juillet 2018')}
      occupation={text('Occupation', 'Développeur React')}
    >
      {description1}
      <br /><br />
      {description2}
    </MissionCard>
  )
};
