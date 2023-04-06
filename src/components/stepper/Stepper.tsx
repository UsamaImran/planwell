import { useFormContext } from '@/context/form/formContext';
import { Box } from '@mui/material';
import React from 'react';
import { getStepperStyles, styles } from './styles';
const { stepper, stepperContainer } = styles;

function Stepper() {
  const { currentStep, stepSize } = useFormContext();
  return (
    <Box sx={stepperContainer}>
      {[...Array(stepSize)].map((_, i) => (
        <Box key={i} sx={{ ...stepper, ...getStepperStyles(currentStep, i) }} />
      ))}
    </Box>
  );
}

export default Stepper;
