import React from 'react';
import { text } from "@storybook/addon-knobs";

import Nav from '../components/Nav/Nav';

export default {
  title: 'NavBar',
};

const menuConfig = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'Projects',
  },
  {
    href: '#',
    label: 'Articles',
  },
  {
    href: '#',
    label: 'Contact',
  },
]

export const ClassicNav = () => (
  <Nav items={menuConfig} />
);
