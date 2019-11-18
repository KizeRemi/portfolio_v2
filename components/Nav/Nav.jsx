import React from 'react';
import NextLink from '../Link/NextLink';

import { Container } from '../Layout';
import { Link } from '../Link';

const Nav = ({ items }) => (
  <Container>
    {items.map(item => (
      <NextLink href={item.href} active>
        <Link>{item.label}</Link>
      </NextLink>
    ))}
  </Container>
);

export default Nav;
