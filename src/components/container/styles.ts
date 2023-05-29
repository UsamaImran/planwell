import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { IStyles } from '@/types/global';

export const styles = {
  containerStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: '20px',
    boxShadow: 1,
    marginY: 5,
    width: '1110px',

    [MEDIUM_AND_SMALL_SCREEN]: {
      width: '100%',
      paddingX: 1,
      marginX: 0,
    },
  },

  containerHeader: {
    display: 'flex',
    justifyContent: 'center',
    color: (theme) => theme.palette.primary.main,
    fontSize: '30px',
  },

  inputContainerStyle: {
    borderRadius: 5,
    paddingY: '10px',
    paddingX: '20px',
    marginX: 2,
    marginY: 4,
    [MEDIUM_AND_SMALL_SCREEN]: { width: '100%', paddingX: 0, marginX: 0 },
  },

  inputContainerChild: {
    display: 'flex',
    flexDirection: 'column',
    marginY: '30px',
    paddingX: '30px',
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  additionalInfo: {
    marginTop: 'auto',
    marginX: '0 !important',
  },

  tooltipAndHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
} satisfies IStyles;
