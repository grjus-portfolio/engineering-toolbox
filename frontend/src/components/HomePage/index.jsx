import React from 'react';
import { Container } from '../../style';
import { FadeContainer } from '../ToolboxComponents/FadeContainer/FadeContainer';
import AppContainer from './AppContainer';
import TitleCard from './TitleCard';

const HomePage = () => (
  <FadeContainer condition timeout={500}>
    <Container noBackColor>
      <TitleCard />
      <AppContainer />

    </Container>
  </FadeContainer>
);

export default HomePage;
