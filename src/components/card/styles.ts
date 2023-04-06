import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { IStyles } from '@/types/global';

export const style = {
  cardContainer: {
    marginY: 2,
    width: '311px',
    height: '260px',
    borderRadius: 4,
    // filter: `drop-shadow(4px 4px 10px ${DARK})`,
    [MEDIUM_AND_SMALL_SCREEN]: {
      width: '100%',
    },
  },
  image: {
    width: '125px',
    height: '120px',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
} satisfies IStyles;
