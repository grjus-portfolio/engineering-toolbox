import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Image, Title, Description,
} from './style';

const AppCard = ({
  title, description, image, path,
}) => (
  <Container exact to={path}>
    <Image src={image} alt="App Image" />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default AppCard;
