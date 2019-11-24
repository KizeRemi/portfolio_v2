import React from 'react'
import Head from 'next/head'
import { StackCard } from '../components/Stack';
import { MissionCard } from '../components/Mission';
import { Container } from '../components/Layout';
import BodyLayout from '../components/Layout/BodyLayout';
import Nav from '../components/Nav/Nav';

import STACKS_LIST from '../constants/stacks';
import MISSIONS_LIST from '../constants/missions';
import { SectionHeader } from '../components/Title';

const menuConfig = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: '/projets',
    label: 'Projets',
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
      <SectionHeader title="Ce que je sais faire" overlay="WHAT CAN I DO" />
      <Container centered padded>
        {STACKS_LIST.map(stack => <StackCard {...stack} />)}
      </Container>

        <SectionHeader title="J'ai travaillé pour" overlay="I have worked for" />

      <Container centered padded>
        {MISSIONS_LIST.map(({ description1, description2, ...mission })=> (
          <MissionCard {...mission}>
            {description1}
            <br /><br />
            {description2}
          </MissionCard>
        ))}
      </Container>
    </BodyLayout>
  </div>
)

export default Home
