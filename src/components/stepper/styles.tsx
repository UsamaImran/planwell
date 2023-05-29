import { STEPPER_COLOR } from '@/styles/colors';
import { IStyles } from '@/types/global';
import { SxProps, Theme } from '@mui/material';

export const styles = {
  stepperContainer: { display: 'flex', gap: 3, justifyContent: 'center' },
  stepper: {
    width: '60px',
    height: '13px',
  },
} satisfies IStyles;

export const getStepperStyles = (
  currentStep: number,
  index: number
): SxProps<Theme> => ({
  backgroundColor: currentStep >= index ? STEPPER_COLOR : '#C0C0C0',
});
