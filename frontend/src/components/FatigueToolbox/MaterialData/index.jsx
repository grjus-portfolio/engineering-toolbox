import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DropDown, { FadeDropDown } from '../../ToolboxComponents/Dropdown';
import { Title, ButtonContainer } from '../styles';
import {
  unitSystemItems, modFacItems, surfaceFinishItems, loadFactorItems, relFactorItems,
} from './constants';
import { FadeTextBox, TextBox } from '../../ToolboxComponents/TextBox';
import CustomCheckbox from '../../ToolboxComponents/Checkbox';
import {
  DropdownContainer, InputField, FatigueFactors, CheckboxContainer,
} from './styles';
import CustomButton from '../../ToolboxComponents/Button/Button';
import { FatigueContext, FatigueContextDispatch } from '../context';
import { ultStrValRules, userFacValRules } from '../validators';
import ToastHelper from '../../ToolboxComponents/Toast';
import Helper from './toast/Helper';
import { FadeContainer } from '../../ToolboxComponents/FadeContainer/FadeContainer';

function MaterialData() {
  const [hideToast, setHideToast] = useState(false);
  const fatigueState = useContext(FatigueContext);
  const fatigueStateDispatch = useContext(FatigueContextDispatch);
  const {
    surfaceFactor, loadFactor, reliabilityFactor, userDefinedFactor,
  } = fatigueState;

  const {
    control, watch, register, handleSubmit, errors,
  } = useForm({
    defaultValues: {
      unitSystem: fatigueState.unitSystem,
      ultimateStrength: fatigueState.ultimateStrength,
      isSrufaceFactor: surfaceFactor.isrequired,
      isLoadFactor: loadFactor.isrequired,
      isRelFactor: reliabilityFactor.isrequired,
      ifCustomFactor: userDefinedFactor.isrequired,
      surtfaceFinishFactor: surfaceFactor.value,
      loadFactor: loadFactor.value,
      relFactor: reliabilityFactor.value,
      customFactor: userDefinedFactor.value,
    },
  });

  const {
    isSrufaceFactor, isLoadFactor, isRelFactor, ifCustomFactor, unitSystem: unitSystemWatch,
  } = watch();

  const submitData = (data) => {
    setHideToast(true);
    fatigueStateDispatch((prev) => ({
      ...prev,
      activeStep: 1,
      unitSystem: data.unitSystem,
      ultimateStrength: data.ultimateStrength,
      surfaceFactor: {
        isrequired: data.isSrufaceFactor,
        value: data.surtfaceFinishFactor || surfaceFactor.value,
      },
      loadFactor: {
        isrequired: data.isLoadFactor,
        value: data.loadFactor || loadFactor.value,
      },
      reliabilityFactor: {
        isrequired: data.isRelFactor,
        value: data.relFactor || reliabilityFactor.value,
      },
      userDefinedFactor: {
        isrequired: data.ifCustomFactor,
        value: data.customFactor || userDefinedFactor.value,
      },
    }));
  };

  return (
    <FadeContainer condition timeout={500}>
      <ToastHelper toastStatus={hideToast} helperComponent={<Helper />} />
      <Title>
        Select stress unit system
      </Title>
      <InputField>
        <DropDown control={control} name="unitSystem" dropDownItems={unitSystemItems} />
      </InputField>
      <Title>Specify material ultimate strength</Title>
      <InputField style={{ marginTop: '20px' }}>
        <TextBox width="100%" name="ultimateStrength" inputRef={register(ultStrValRules)} label={`Ultimate strength, ${unitSystemWatch}`} error={errors.ultimateStrength} />
      </InputField>
      <Title>Define material modification factors</Title>
      <FatigueFactors>
        <CheckboxContainer>
          {modFacItems.map((item) => <CustomCheckbox key={item.value} name={item.value} control={control} label={item.label} />)}
        </CheckboxContainer>
        <DropdownContainer>
          <FadeDropDown style={{ paddingBottom: '1em' }} timeout={300} visible={isSrufaceFactor} control={control} name="surtfaceFinishFactor" dropDownItems={surfaceFinishItems} />
          <FadeDropDown style={{ paddingBottom: '1em' }} timeout={300} visible={isLoadFactor} control={control} name="loadFactor" dropDownItems={loadFactorItems} />
          <FadeDropDown style={{ paddingBottom: '1em' }} timeout={300} visible={isRelFactor} control={control} name="relFactor" dropDownItems={relFactorItems} />

        </DropdownContainer>
      </FatigueFactors>
      <InputField>
        <FadeTextBox unmountOnExit width="100%" timeout={300} variant="standard" visible={ifCustomFactor} name="customFactor" inputRef={register(userFacValRules)} label="User defined factor" error={errors.customFactor} />
      </InputField>

      <ButtonContainer>
        <CustomButton handleClick={handleSubmit(submitData)} label="Next" buttonType="contained" color="primary" />
      </ButtonContainer>
    </FadeContainer>
  );
}

export default MaterialData;
