import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_SKIN } from '@/styles/colors';
import React from 'react';
import Container from '../../container/Container';
import InputContainer from '../../container/InputContainer';
import InputSlider from '../../input/InputSlider';
import { commonStyles } from '../styles';

const { wrapperContainer } = commonStyles;

function AssetsStep() {
  const {
    formValues: { assetStep },
    onFormValuesChange,
  } = useFormContext();

  const { retirementBalanceValue, investmentBalanceValue, cashValue } =
    assetStep;

  const handleValuesChange = <T extends keyof typeof assetStep>(
    key: T,
    value: number | number[]
  ) => {
    const val = value as number;
    onFormValuesChange('assetStep', { ...assetStep, [key]: val });
  };

  return (
    <Container header='Enter Your Assets' sx={wrapperContainer}>
      <InputContainer
        title='Balances: How Much Have You Saved So Far?'
        backgroundColor={BACKGROUND_SKIN}
      >
        <InputSlider
          max={50_000_000}
          step={50}
          label='Retirement Balance'
          value={retirementBalanceValue}
          onChangeValue={(value) =>
            handleValuesChange('retirementBalanceValue', +value)
          }
        />
        <InputSlider
          max={50_000_000}
          step={50}
          label='Investment Balance'
          value={investmentBalanceValue}
          onChangeValue={(value) =>
            handleValuesChange('investmentBalanceValue', +value)
          }
        />
        <InputSlider
          max={50_000_000}
          step={50}
          label='Cash'
          value={cashValue}
          onChangeValue={(value) => handleValuesChange('cashValue', +value)}
        />
      </InputContainer>
    </Container>
  );
}

export default AssetsStep;
