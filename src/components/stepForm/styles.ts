import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import {
  BACKGROUND_GREEN,
  BACKGROUND_PURPLE,
  BACKGROUND_SKIN,
  BACKGROUND_YELLOW,
  PRIMARY_BLUE,
  PRIMARY_GREEN,
  TEXT_BLUE,
} from '@/styles/colors';

import { IStyles } from '@/types/global';
import { darkenColor } from '@/utils/utils';
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const styles = {
  mainContainer: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    [MEDIUM_AND_SMALL_SCREEN]: {
      width: '100%',
      padding: 0,
      margin: 0,
    },
  },

  infoContainer: {
    display: 'flex',
    boxShadow: 'none',
    gap: 1,
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      gap: 1,
    },
  },
  formStepContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginY: 10,
    width: '100%',
  },

  stateContainer: {
    display: 'flex',
    alignItems: 'center',
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'flex-start',
      gap: 1.5,
    },
  },
  formContainer: { [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' } },
  selectStyles: {
    marginLeft: 2,
    flex: 1,
    borderRadius: '13px',
    backgroundColor: 'white',
    width: '233px',
    padding: '4px',
    border: `1px solid ${PRIMARY_BLUE}`,

    [MEDIUM_AND_SMALL_SCREEN]: {
      width: '295px',
      minWidth: '100%',
      marginLeft: 0,
    },
  },
  cardWrapper: {},
} satisfies IStyles;

export const goalStepStyles = {
  heading: { fontSize: '30px', color: TEXT_BLUE },
  subHeading: { fontSize: '25px', color: TEXT_BLUE, marginTop: 5 },
  headingsContainer: { textAlign: 'center' },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 3,
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      paddingX: '10px',
    },
  },
} satisfies IStyles;

export const incomeStepStyles = {
  tooltipHeading: {
    fontSize: '16px',
    color: TEXT_BLUE,
    marginBottom: '15px',
    fontWeight: (theme) => theme.typography.fontWeightBold,
  },
  tooltipSubHeading: { fontSize: '14px' },
} satisfies IStyles;

export const expensesStepStyles = {
  subContainer: { paddingX: '60px' },
  typographyContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginY: '40px',
  },
  BoxContainer: {
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      gap: 10,
    },
  },
  singleBox: {
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  coloredBox: {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  },
  customContainer: {
    textAlign: 'center',
    marginY: '45px',
  },
  inputContainer: {
    display: 'flex',
    gap: 10,
    marginTop: 6,
    justifyContent: 'center',
  },
  radioContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
  },
} satisfies IStyles;

export const kidsStepStyles = {
  container: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
} satisfies IStyles;

export const commonStyles = {
  wrapperContainer: {
    boxShadow: 'none',
    marginTop: -10,
    padding: '0px !important',
  },
  infoContainer: { width: 'auto', margin: '0' },
  tooltipContainer: { display: 'flex', flexDirection: 'column', gap: 3 },
  tooltipHeading: {
    color: 'gray',
    fontWeight: (theme) => theme.typography.fontWeightBold,
  },
  downPaymentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
} satisfies IStyles;

export const retirementAdditionalInfoStyles = {
  infoContainer: { width: 'auto', margin: '0' },
  tooltipContainer: { display: 'flex', flexDirection: 'column', gap: 3 },
} satisfies IStyles;

export const kidsGoalItemStyles = {
  container: {
    marginY: '20px',
    paddingY: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 4,
    },
  },
  childItem: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: '700',
  },
  childContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 2,
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },
  radioContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectStyles: {
    borderRadius: '16px',
    width: '100%',
    height: '55px',
    border: (theme) => `1px solid ${theme.palette.primary.main}`,
    backgroundColor: 'white',
  },
} satisfies IStyles;

export const getRandomBackgroundColor = () => {
  const possibleColors = [
    BACKGROUND_GREEN,
    BACKGROUND_PURPLE,
    BACKGROUND_SKIN,
    BACKGROUND_YELLOW,
  ];

  return possibleColors[Math.floor(Math.random() * possibleColors.length)];
};

export const buttonContainerStyles = {
  backBtnStyles: {
    backgroundColor: 'gray',
    '&:hover': { backgroundColor: 'darkgray' },
    [MEDIUM_AND_SMALL_SCREEN]: { width: '80%' },
  },
  nextBtnStyles: {
    backgroundColor: PRIMARY_GREEN,
    '&:hover': { backgroundColor: darkenColor(PRIMARY_GREEN, 5) },
    [MEDIUM_AND_SMALL_SCREEN]: { width: '80%' },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      gap: 3,
      alignItems: 'center',
      marginBottom: '50px',
    },
  },
} satisfies IStyles;

export const getFormWrapperStyles = (currentStep: number) => {
  const styles = {
    backgroundColor: currentStep === 0 ? 'transparent' : 'white',
    boxShadow: currentStep === 0 ? 'none' : 1,
  } satisfies SxProps<Theme>;
  return styles;
};
