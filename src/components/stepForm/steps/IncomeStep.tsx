import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_PURPLE } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Container from '../../container/Container';
import InputContainer from '../../container/InputContainer';
import InputSlider from '../../input/InputSlider';
import { incomeStepStyles, commonStyles } from '../styles';

const { tooltipHeading, tooltipSubHeading } = incomeStepStyles;

function IncomeStep() {
  const {
    formValues: { incomeStep },

    onFormValuesChange,
  } = useFormContext();

  const { incomeValue } = incomeStep;

  const handleValuesChange = <T extends keyof typeof incomeStep>(
    key: T,
    value: number | number[]
  ) => {
    const val = value as number;
    onFormValuesChange('incomeStep', { ...incomeStep, [key]: val });
  };

  return (
    <Container
      header='Enter Your Income'
      tooltip={<IncomeTooltip />}
      sx={commonStyles.wrapperContainer}
    >
      <InputContainer
        backgroundColor={BACKGROUND_PURPLE}
        title={'Family Income'}
      >
        <InputSlider
          value={incomeValue}
          max={2000000}
          step={50}
          name='incomeStep.incomeValue'
          label='Annual Gross Income *'
          onChangeValue={(value) => handleValuesChange('incomeValue', +value)}
        />
      </InputContainer>
    </Container>
  );
}

export default IncomeStep;

const IncomeTooltip = () => {
  return (
    <Box>
      <Typography sx={tooltipHeading}>
        Why do we need your income information?
      </Typography>
      <Typography sx={tooltipSubHeading}>
        We use the income as the basis to determine savings and future cash
        flows.
      </Typography>
    </Box>
  );
};
