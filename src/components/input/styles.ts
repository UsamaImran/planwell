import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { PRIMARY_BLUE } from '@/styles/colors';
import { IStyles } from '@/types/global';

export const styles = {
  sliderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 3,

    [MEDIUM_AND_SMALL_SCREEN]: {
      padding: '30px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 3,
      paddingX: '10px',
    },
  },
  typographySection: {
    [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' },
  },
  sliderSection: { width: '65%', [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' } },
  inputSection: {
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' },
  },
  inputStyles: {
    flex: 1,
    // width: '300px',
    padding: '1px',
    height: '55px',
    backgroundColor: 'white',
    border: (theme) => `1px solid ${theme.palette.primary.main}`,
    borderRadius: '16px',
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
    '&:hover': {},
    [MEDIUM_AND_SMALL_SCREEN]: {
      width: '100%',
      minWidth: '100%',
    },
  },
  inputComponentStyle: {
    MozAppearance: 'textfield',
  },
  subContainer: { display: 'flex', alignItems: 'center', gap: 4 },
  sliderThumb: {
    '& .MuiSlider-thumb': {
      width: '30px',
      color: '#0052CC',
      height: '30px',
      border: '8px solid #FFF',
      boxShadow: '0px 8px 16px rgba(0, 82, 204, 0.16)',
      '&:hover': {
        boxShadow: '0px 0px 0px 10px rgb(63 81 181 / 10%)',
      },
      '&:focus, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: '0px 0px 0px 12px rgb(63 81 181 / 16%)',
      },
      '& .MuiSlider-rail': {
        color: '#8F92A1',
        height: '6.22px',
        opacity: 0.2,
      },
      '& .MuiSlider-valueLabel': {
        backgroundColor: '#0052cc',
        borderRadius: '9px',
        py: '4px',
        px: '20px',
        boxShadow: '0 5px 16px rgb(0 82 204 / 40%)',
        top: '-14px',
      },
    },
  },
} satisfies IStyles;

export const getInputAdornmentStyles = (
  myValue: string | number,
  type = 'money'
) => ({
  color: myValue ? '#000000' : '#979797',
  fontSize: '14px',
  fontWeight: 700,
  fontFamily: 'DM Sans',
  paddingLeft: type === 'money' || type === 'number' ? '10px' : '0px',
  paddingRight: type === 'money' || type === 'number' ? '0px' : '10px',
});

export const getErrorStyles = (error: boolean) => ({
  border: error ? '1px solid red' : `1px solid ${PRIMARY_BLUE}`,
});
