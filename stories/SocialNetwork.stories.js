import React from 'react';
import { array } from '@storybook/addon-knobs';

import SocialNetwork from '../components/SocialNetwork/SocialNetwork';
import { Container } from '../components/Layout';

import LinkedinLogo from '../public/images/linkedin-logo.svg';
import GithubLogo from '../public/images/github-logo.svg';

export default {
  title: 'SocialNetwork',
};

export const SocialNetworkList = () => {
  const socialNetworks = array('Add social networks (comma separator)', ['Facebook', 'Instagram']);

  return (
    <Container centered gradient>
      <SocialNetwork socialNetworkLogo={LinkedinLogo} link="http://www.google.fr" label="Linkedin/KizeRemi" />
      <SocialNetwork socialNetworkLogo={GithubLogo} link="http://www.google.fr" label="Github/KizeRemi" />
      {socialNetworks.map(socialNetwork => (
        <SocialNetwork socialNetworkLogo={GithubLogo} link="http://www.google.fr" label={socialNetwork} />
      ))}
    </Container>
  )
};

export const SocialNetworkNoLabelList = () => {
  const socialNetworks = array('Add social networks (comma separator)', ['Facebook']);

  return (
    <Container centered gradient>
      <SocialNetwork socialNetworkLogo={LinkedinLogo} link="http://www.google.fr" />
      <SocialNetwork socialNetworkLogo={GithubLogo} link="http://www.google.fr" />
      {socialNetworks.map(socialNetwork => (
        <SocialNetwork socialNetworkLogo={GithubLogo} link="http://www.google.fr" />
      ))}
    </Container>
  )
};

