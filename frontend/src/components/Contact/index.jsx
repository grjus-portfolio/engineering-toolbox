import React, { useState, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonContainer, ErrorMessage } from '../ToolboxComponents/Card/style';
import CustomButton from '../ToolboxComponents/Button/Button';
import { TextBox } from '../ToolboxComponents/TextBox';

import { initialState, actionType, dataSubmitReducer } from '../Reducers/index';
import fastApi from '../Api/index';
import {
  ConfirmMessage, Description, FormContainer, FieldContainer, Header, Container,
} from './style';
import CustomSpinner from '../ToolboxComponents/Spinner';
// import { FadeContainer } from '../ToolboxComponents/FadeContainer/FadeContainer';
import GeneralCard from '../ToolboxComponents/GeneralCardTemplate';

function Contact() {
  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);
  const [confirm, setConfirm] = useState('');

  const {
    register, errors, handleSubmit, reset,
  } = useForm({
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  const sendMessage = (data) => {
    dispatch({ type: actionType.SUBMIT });
    fastApi.post('/api/contact', JSON.stringify(data)).then((response) => {
      if (response.status === 200) {
        setConfirm(response.data.detail);
        dispatch({ type: actionType.SUCCESS });
        reset();
      }
    }).catch((error) => {
      if (!error.response) {
        dispatch({ type: actionType.FAIL, payload: 'Error in connection to Python API' });
      } else if (error.response.status === 422) {
        error.response.data.detail.forEach((element) => {
          dispatch({ type: actionType.FAIL, payload: element.msg });
        });
      } else if (error.response.status === 502) {
        dispatch({ type: actionType.FAIL, payload: error.response.data.detail });
      } else {
        dispatch({ type: actionType.FAIL, payload: 'Failed to submit message. Please try again later' });
      }
    });
  };

  return (
    <GeneralCard>

      <Container>

        <Header>Contact us</Header>
        <Description>
          Found a bug? Need support? Or maybe you have an idea for online
          {' '}
          <span>Enginnering Tool</span>
        </Description>

        <FormContainer>
          <FieldContainer>
            <TextBox
              name="email"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Email adress is required',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              label="Your email adress"
              error={errors.email}
              fieldType="text"
              width="100%"
              disabled={state.isRunning}
            />
          </FieldContainer>
          <FieldContainer>
            <TextBox
              name="subject"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Subject is required',
                },
                maxLength: {
                  value: 100,
                  message: 'Max numbers of chars is limited to 10',
                },
              })}
              label="Subject"
              error={errors.subject}
              fieldType="text"
              width="100%"
              disabled={state.isRunning}
            />
          </FieldContainer>
          <FieldContainer>

            <TextBox
              name="message"
              inputRef={register({
                required: {
                  value: true,
                  message: 'Message is required',
                },
                maxLength: {
                  value: 1000,
                  message: 'Max numbers of chars is limited to 10',
                },
              })}
              label="Message"
              error={errors.message}
              multiline
              fieldType="text"
              width="100%"
              disabled={state.isRunning}
            />
          </FieldContainer>
        </FormContainer>

        <ConfirmMessage>
          {confirm}
        </ConfirmMessage>

        <FieldContainer>
          {state.errorMessage ? state.errorMessage.map((item) => <ErrorMessage key={`error-${item}`}>{`${item}`}</ErrorMessage>) : null}
        </FieldContainer>
        <ButtonContainer style={{ padding: '20px 0px 20px 10px' }}>
          <CustomButton handleClick={handleSubmit(sendMessage)} label={state.isRunning ? 'SUBMITTING' : 'SUBMIT'} buttonType="contained" color="primary" disabled={state.isRunning} />
          {state.isRunning ? <CustomSpinner marginTop="6px" /> : null}

        </ButtonContainer>

      </Container>

    </GeneralCard>
  );
}

export default Contact;
