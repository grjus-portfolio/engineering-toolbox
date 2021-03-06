import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import DropDown, { FadeDropDown } from '../../ToolboxComponents/Dropdown';
import {
  ButtonContainer, FormContent, Title,
} from '../../ToolboxComponents/Card/style';
import {
  unitSystemItems, modFacItems, surfaceFinishItems, loadFactorItems, relFactorItems,
} from './constants';
import { FadeTextBox, TextBox } from '../../ToolboxComponents/TextBox';
import CustomCheckbox from '../../ToolboxComponents/Checkbox';
import { DropdownContainer } from './styles';
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
      <Card>
        <ToastHelper toastStatus={hideToast} helperComponent={<Helper />} />
        <Title>
          Select stress unit system
        </Title>
        <FormContent>
          <DropDown control={control} name="unitSystem" dropDownItems={unitSystemItems} />
        </FormContent>
        <Title>Specify material ultimate strength</Title>
        <FormContent style={{ marginTop: '20px' }}>
          <TextBox name="ultimateStrength" inputRef={register(ultStrValRules)} label={`Ultimate strength, ${unitSystemWatch}`} error={errors.ultimateStrength} />
        </FormContent>
        <Title>Define material modification factors</Title>
        <FormContent flex>
          <FormContent>
            {modFacItems.map((item) => <CustomCheckbox key={item.value} name={item.value} control={control} label={item.label} />)}
          </FormContent>
          <DropdownContainer>
            <FadeDropDown style={{ padding: '10px' }} timeout={300} visible={isSrufaceFactor} control={control} name="surtfaceFinishFactor" dropDownItems={surfaceFinishItems} />
            <FadeDropDown style={{ padding: '10px' }} timeout={300} visible={isLoadFactor} control={control} name="loadFactor" dropDownItems={loadFactorItems} />
            <FadeDropDown style={{ padding: '10px' }} timeout={300} visible={isRelFactor} control={control} name="relFactor" dropDownItems={relFactorItems} />
            <FadeTextBox unmountOnExit style={{ flexBasis: '100%', paddingLeft: '10px' }} width="165px" timeout={300} visible={ifCustomFactor} name="customFactor" inputRef={register(userFacValRules)} label="User defined factor" error={errors.customFactor} />
          </DropdownContainer>
        </FormContent>
        <ButtonContainer>
          <CustomButton handleClick={handleSubmit(submitData)} label="Next" buttonType="contained" color="primary" />
        </ButtonContainer>
      </Card>
    </FadeContainer>
  );
}

export default MaterialData;
