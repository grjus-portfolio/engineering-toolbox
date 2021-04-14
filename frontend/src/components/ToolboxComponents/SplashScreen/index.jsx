import React from 'react';
import PropTypes from 'prop-types';
import { FadeContainer } from '../FadeContainer/FadeContainer';
import Progress from './ProgressBar';
import {
  Container, Logo, DescriptionContainer, Description, Bar,
} from './style';

import LOGO from '../GeneralCardTemplate/img/LOGO.PNG';

const SplashScreen = ({ visible }) => (
  <FadeContainer condition={visible} timeout={1000}>
    <Container>
      <Logo src={LOGO} alt="App Logo" />
      <DescriptionContainer>
        <Description>Connecting to server</Description>
        <Bar>
          <Progress variant="query" />
        </Bar>
      </DescriptionContainer>
    </Container>
  </FadeContainer>
);

export default SplashScreen;

SplashScreen.propTypes = {
  visible: PropTypes.bool.isRequired,
};
