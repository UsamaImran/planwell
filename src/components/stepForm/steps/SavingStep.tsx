import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_YELLOW } from '@/styles/colors';
import React from 'react';
import Container from '../../container/Container';
import InputContainer from '../../container/InputContainer';
import InputSlider from '../../input/InputSlider';
import { commonStyles } from '../styles';

const { wrapperContainer } = commonStyles;

function SavingStep() {
  const {
    formValues: { savingStep },
    onFormValuesChange,
  } = useFormContext();

  const { KValue, IRAValue, rothIraValue } = savingStep;

  const handleValuesChange = <T extends keyof typeof savingStep>(
    key: T,
    value: number | number[]
  ) => {
    const val = value as number;
    onFormValuesChange('savingStep', { ...savingStep, [key]: val });
  };

  return (
    <Container header='Enter Your Savings' sx={wrapperContainer}>
      <InputContainer
        title='Annual Contributions: How Much Do You Save Every Year?'
        backgroundColor={BACKGROUND_YELLOW}
      >
        <InputSlider
          max={2000000}
          step={50}
          label='401K'
          value={KValue}
          onChangeValue={(value) => handleValuesChange('KValue', +value)}
        />
        <InputSlider
          max={2000000}
          step={50}
          label='IRA'
          value={IRAValue}
          onChangeValue={(value) => handleValuesChange('IRAValue', +value)}
        />
        <InputSlider
          max={2000000}
          step={50}
          label='Roth IRA'
          value={rothIraValue}
          onChangeValue={(value) => handleValuesChange('rothIraValue', +value)}
        />
      </InputContainer>
    </Container>
  );
}

export default SavingStep;
