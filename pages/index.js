import React from 'react'
import Head from 'next/head'
import { StackCard } from '../components/Stack';
import BodyLayout from '../components/Layout/BodyLayout';
import Nav from '../components/Nav/Nav';

const stacksList = [
  {
    name: 'React',
    logo: '/images/react-logo.svg',
    description: `Relativement simple à utiliser et rapide, j'utilise React et React Native pour les applications Front.`,
  },
  {
    name: 'Node.js',
    logo: '/images/nodejs-logo.svg',
    description: `Je travaille sur des API node depuis 1 an et demi dans des projets professionnels.`,
  },
  {
    name: 'Symfony',
    logo: '/images/symfony-logo.svg',
    description: `J’ai travaillé avec Symfony pendant plus de 2 ans. Les services, la communauté, font que j'ai adoré cette techno.`,
  },
  {
    name: 'GraphQL',
    logo: '/images/graphql-logo.svg',
    description: `Je monte en compétences sur GraphQL depuis 1 an, en utilisant la librairie Apollo.`,
  },
  {
    name: 'PostgreSQL',
    logo: '/images/postgresql-logo.svg',
    description: `Pour mes bases de données, j’utilise du PostgreSQL avec la librairie Knex.`,
  },
];
const menuConfig = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/project',
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

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <BodyLayout>
      <Nav items={menuConfig} />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '12rem', flexWrap: 'wrap' }}>
        {stacksList.map(stack => <StackCard {...stack} />)}
      </div>
    </BodyLayout>

  </div>
)

export default Home
