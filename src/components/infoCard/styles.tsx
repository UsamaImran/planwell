import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';

import { IStyles } from '@/types/global';

export const styles = {
  infoCardContainer: {
    width: '100%',
    height: '141px',
    borderRadius: 4,

    [MEDIUM_AND_SMALL_SCREEN]: { width: '100%', padding: 4 },
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 3,
  },
  text: {
    [MEDIUM_AND_SMALL_SCREEN]: {
      fontSize: '25px',
    },
  },
} satisfies IStyles;
