import { useFormContext } from '@/context/form/formContext';
import { Box } from '@mui/material';
import React from 'react';
import Container from '../container/Container';
import Stepper from '../stepper/Stepper';
import { getFormWrapperStyles, styles } from './styles';
import Loader from '../loader/Loader';
import InfoContainer from './components/InfoContainer';
import ButtonContainer from './components/ButtonContainer';

const { mainContainer, formStepContainer, formContainer } = styles;

function StepForm() {
  const { currentFormStep, isLoading, currentStep } = useFormContext();

  return (
    <Box>
      {isLoading && <Loader />}
      <Container sx={mainContainer}>
        <Box sx={formContainer}>
          <InfoContainer />
          <Stepper />
          <Container sx={getFormWrapperStyles(currentStep)}>
            <Box sx={formStepContainer}>{currentFormStep.component}</Box>
            <ButtonContainer />
          </Container>
        </Box>
      </Container>
    </Box>
  );
}

export default StepForm;
