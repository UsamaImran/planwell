import { useFormSubmit } from '@/api/useFormSubmit';
import { useFormContext } from '@/context/form/formContext';
import { getTransformedRequest, scrollToDestination } from '@/utils/utils';
import { Box } from '@mui/material';
import Button from '../../button/Button';
import { buttonContainerStyles } from '../styles';

const { backBtnStyles, nextBtnStyles, buttonContainer } = buttonContainerStyles;

const ButtonContainer = () => {
  const {
    formValues,
    currentFormStep: { disable },
    isFirstStep,
    isLastStep,
    subscriber: { publish },
    saveResult,
    setCurrentStep,
    setIsLoading,
  } = useFormContext();

  const { mutate } = useFormSubmit();

  const title = isLastStep ? 'View Results' : 'Next';

  function navigateToNextStep() {
    scrollToDestination('form');
    setCurrentStep((prev) => prev + 1);
  }

  async function handleFormSubmit() {
    if (!formValues.finalStep.retirementGoals.state) {
      scrollToDestination('form');
      publish(true);
    } else {
      setIsLoading(true);
      try {
        const transformedRequest = getTransformedRequest(formValues);

        mutate(transformedRequest, {
          onSuccess: (data) => {
            saveResult(data);
          },
          onError: (error) => {
            throw error;
          },
        });
      } catch (err) {
        console.log('error occurred => ', err);
      }
      setIsLoading(false);
    }
  }

  const nextClickHandler = () => {
    switch (isLastStep) {
      case true:
        handleFormSubmit();
        break;
      case false:
        navigateToNextStep();
        break;
      default:
        null;
    }
  };

  return (
    <Box sx={buttonContainer}>
      {!isFirstStep && (
        <Button
          sx={backBtnStyles}
          displayBackIcon
          displayNextIcon={false}
          disabled={isFirstStep}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </Button>
      )}
      <Button
        disabled={disable}
        sx={nextBtnStyles}
        displayNextIcon={!isLastStep}
        onClick={nextClickHandler}
      >
        {title}
      </Button>
    </Box>
  );
};

export default ButtonContainer;
