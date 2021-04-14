import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { Divider } from '@material-ui/core';
import { Container } from '../../style';
import {
  InputBlock, OpacityBlock, Header, AppContainer, InputField,
} from './style';
import DropDown from '../ToolboxComponents/Dropdown';
import { FadeTextBox } from '../ToolboxComponents/TextBox';
import { unitSystemItems } from './config';
import { validationRules } from './validators';
// Data fetching

import { useDataFetch } from './dataFetch';
import Results from './Results';
import Spinner from './Spinner/Spinner';
import { FadeContainer } from '../ToolboxComponents/FadeContainer/FadeContainer';

const NeuberToolbox = () => {
  const {
    control, register, errors, handleSubmit, trigger,
  } = useForm({
    mode: 'onChange',
    isValid: false,
    reValidateMode: 'onChange',
    defaultValues: {
      unitSystem: unitSystemItems[0].value,
      youngsModulus: 27000,
      yieldStrength: 130,
      osgoodExponent: 22,
      totalElongation: 0.1,
      linearStress: '',
    },
  });

  const {
    unitSystem,
    osgoodExponent,
    yieldStrength,
    youngsModulus,
    totalElongation,
    linearStress,
  } = useWatch({
    control,
  });

  const [results, state] = useDataFetch(handleSubmit, {
    unitSystem,
    osgoodExponent,
    yieldStrength,
    linearStress,
    youngsModulus,
    totalElongation,
  });

  return (
    <Container noBackColor>

      <AppContainer>
        <Spinner isRunning={state.isRunning} />

        <OpacityBlock disabled={state.isRunning}>

          <Header>Unit system</Header>
          <InputField>
            <DropDown
              name="unitSystem"
              control={control}
              dropDownItems={unitSystemItems}
              handleChange={() => trigger(['youngsModulus', 'linearStress', 'yieldStrength'])}
            />
          </InputField>
          <Header>Input data</Header>
          <InputBlock>

            <InputField>
              <FadeTextBox
                name="linearStress"
                inputRef={register(
                  validationRules(yieldStrength, 5 * yieldStrength),
                )}
                label={`Linear stress,${unitSystem}`}
                error={errors.linearStress}
                disabled={state.isRunning}
                width="100%"
                labelWidth="100%"
              />
            </InputField>
            <InputField>
              <FadeTextBox
                labelWidth="100%"
                name="youngsModulus"
                inputRef={register(
                  validationRules(
                    unitSystem === 'ksi' ? 16000 : 110316,
                    unitSystem === 'ksi' ? 40000 : 275790,
                  ),
                )}
                label={`Young's modulus,${unitSystem}`}
                error={errors.youngsModulus}
                disabled={state.isRunning}
                width="100%"

              />
            </InputField>

            <InputField>

              <FadeTextBox
                name="yieldStrength"
                inputRef={register(
                  validationRules(
                    unitSystem === 'ksi' ? 10 : 69,
                    unitSystem === 'ksi' ? 220 : 1700,
                  ),
                )}
                disabled={state.isRunning}
                label={`Yield strength,${unitSystem}`}
                error={errors.yieldStrength}
                width="100%"
                labelWidth="100%"
              />
            </InputField>
            <InputField>
              <FadeTextBox
                name="osgoodExponent"
                inputRef={register(validationRules(10, 30))}
                disabled={state.isRunning}
                label="Osgood exponent"
                error={errors.osgoodExponent}
                width="100%"
                labelWidth="100%"
              />
            </InputField>

            <InputField>
              <FadeTextBox
                name="totalElongation"
                inputRef={register(validationRules(0.002, 1))}
                label="Total elongation"
                error={errors.totalElongation}
                disabled={state.isRunning}
                width="100%"
                labelWidth="100%"
              />
            </InputField>

          </InputBlock>
          <FadeContainer condition={!results.isInit} timeout={1000}>
            <Divider />
          </FadeContainer>

          {!results.isInit ? <Results results={results} isRunning={state.isRunning} /> : null}

        </OpacityBlock>
      </AppContainer>
    </Container>
  );
};

export default NeuberToolbox;
