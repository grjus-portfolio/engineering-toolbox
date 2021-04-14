import React from 'react';
import PropTypes from 'prop-types';
import CustomSpinner from '../../ToolboxComponents/Spinner';
import { Container, Message } from './style';

function Spinner({ isRunning }) {
  return (
    <Container isRunning={isRunning}>
      <CustomSpinner marginTop="0.5em" size="1.5rem" />
      <Message>Calculating...</Message>
    </Container>
  );
}

export default Spinner;

Spinner.propTypes = {
  isRunning: PropTypes.bool.isRequired,
};
