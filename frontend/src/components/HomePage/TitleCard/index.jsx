import React from 'react';
import {
  Container, Info, Title, Description, Image,
} from './style';

const TitleCard = () => (

  <Container>
    <Info>
      <Title>Engineering Toolbox </Title>
      <Description>
        Welcome to
        Engineering Toolbox
        . Purpose of this Website is to provide easy to use engineering tools which can be used in daily work.
        At this moment two engineering applications are provided: Fatigue Toolbox and Stress Correction App.
        In upcoming weeks Composite Toolbox will be provided.  In case of any queries please use contact form.
        This web page is not yet optimized for mobile devices
      </Description>
    </Info>
    <Image src="https://unsplash.it/400/200" />
  </Container>

);

export default TitleCard;
