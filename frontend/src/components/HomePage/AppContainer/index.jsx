import React from 'react';
import AppCard from '../AppCard';
import { Container } from './style';
import { appCardItems } from './config';

const AppContainer = () => (
  <Container>
    {appCardItems.map((item) => <AppCard key={item.path} title={item.title} description={item.description} image={item.image} path={item.path} />)}

  </Container>
);

export default AppContainer;
