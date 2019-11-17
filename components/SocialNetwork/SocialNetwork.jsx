import React from 'react';

import SocialNetworkImage from './SocialNetworkImage';
import { Container } from '../Layout';
import { Link } from '../Link';

const SocialNetwork = ({ socialNetworkLogo, link, label }) => (
  <Container>
    <Link href={link} target="_blank">
      <SocialNetworkImage src={socialNetworkLogo} />
    </Link>
    {label && <Link href={link} target="_blank">{label}</Link>}
  </Container>
);

export default SocialNetwork;
