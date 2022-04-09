import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import {
  AppShell,
  // Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineProvider,
  Paper,
} from '@mantine/core';
import Navbar from '../../components/Navbar';

const Home = () => {
  const [opened, setOpened] = useState(false);
  
  return (
    <>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <Navbar links={[
          {
            'link': '/',
            'label': 'Home'
          },
          {
            'link': '/create',
            'label': 'Create Invoice'
          }
        ]}/>
        <Paper style={{ height: '100vh', borderRadius: 0 }}>
          <Text>
      Home
          </Text>
        </Paper>
      </MantineProvider>
    </>
  );
};

export default Home;
