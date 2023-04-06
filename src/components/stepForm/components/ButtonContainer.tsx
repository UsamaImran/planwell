import { useFormContext } from '@/context/form/formContext';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Button from '../../button/Button';
import { buttonContainerStyles } from '../styles';

const { backBtnStyles, nextBtnStyles, buttonContainer } = buttonContainerStyles;

const ButtonContainer = () => {
  const {
    formValues,
    currentFormStep,
    isFirstStep,
    isLastStep,
    setCurrentStep,
    setIsLoading,
    resetFormValues,
  } = useFormContext();

  const router = useRouter();

  const title = isLastStep ? 'View Results' : 'Next';

  const nextClickHandler = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      try {
        console.log(formValues);
        resetFormValues();
        setIsLoading(true);
        setTimeout(() => {
          router.push('/results');
          setIsLoading(false);
        }, 3000);
      } catch (err) {}
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
        disabled={currentFormStep.disable}
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
