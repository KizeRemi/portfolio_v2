import React from 'react';
import NextLink from '../Link/NextLink';

import { Container } from '../Layout';
import { Link } from '../Link';

const Nav = ({ items }) => (
  <Container padded>
    {items.map(item => (
      <Container>
        <NextLink href={item.href} active>
          <Link>{item.label}</Link>
        </NextLink>
      </Container>
    ))}
  </Container>
);

export default Nav;
