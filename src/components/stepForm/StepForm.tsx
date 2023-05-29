import { useFormContext } from '@/context/form/formContext';
import { Box, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import Container from '../container/Container';
import Stepper from '../stepper/Stepper';
import { getFormWrapperStyles, styles } from './styles';
import Loader from '../loader/Loader';
import ButtonContainer from './components/ButtonContainer';
import Results from '../results/Results';
import { RESULT_SECTION_ID } from '@/constants/constants';
import { scrollToDestination } from '@/utils/utils';

const {
  mainContainer,
  formStepContainer,
  formContainer,
  lastStepStyle,
  lastStepText,
} = styles;

function StepForm() {
  const {
    currentFormStep: { component },
    isLoading,
    currentStep,
    result,
    isLastStep,
    isFirstStep,
  } = useFormContext();

  useEffect(() => {
    scrollToDestination(!!result ? undefined : 'from');
  }, [result]);

  const renderResult = useCallback(() => {
    return !!result && isLastStep && <Results />;
  }, [result, isLastStep]);

  const renderStepper = useCallback(() => {
    return isLastStep ? (
      <Box sx={lastStepStyle}>
        <Typography sx={lastStepText}>
          Set Your Goals; View Results Immediately.
        </Typography>
      </Box>
    ) : (
      <Stepper />
    );
  }, [isLastStep]);

  return (
    <Box>
      {isLoading && <Loader />}
      <Container sx={{ ...mainContainer, marginTop: 10 }}>
        <Box sx={formContainer}>
          {renderStepper()}
          <Container id='form' sx={getFormWrapperStyles(currentStep)}>
            <Box
              sx={{
                ...formStepContainer,
                marginTop: !isFirstStep ? 10 : 0,
                marginBottom: !isLastStep ? 10 : 0,
              }}
            >
              {component}
            </Box>
            <ButtonContainer />
          </Container>
          <Box id={RESULT_SECTION_ID}>{renderResult()}</Box>
        </Box>
      </Container>
    </Box>
  );
}

export default StepForm;
