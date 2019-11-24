import React from 'react'
import Head from 'next/head'
import BodyLayout from '../components/Layout/BodyLayout';
import Nav from '../components/Nav/Nav';
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
const Project = () => (
  <div>
    <Head>
      <title>Projets</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <BodyLayout>
      <Nav items={menuConfig} />
      <div>lol</div>
    </BodyLayout>

  </div>
)

export default Project
