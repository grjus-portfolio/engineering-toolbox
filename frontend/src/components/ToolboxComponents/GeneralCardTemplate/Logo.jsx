import React from 'react';
import LOGO from './img/LOGO.PNG';

import {
  Logo,
  LogoContainer,
} from './style';

function AboutLogo() {
  return (
    <LogoContainer>
      <Logo src={LOGO} alt="Logo" />
    </LogoContainer>
  );
}

export default AboutLogo;
