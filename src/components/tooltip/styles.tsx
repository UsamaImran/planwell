import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { PRIMARY_BLUE } from '@/styles/colors';
import { IStyles } from '@/types/global';

export const styles = {
  popperContainerStyles: {
    width: '569px',
    border: `1px solid ${PRIMARY_BLUE}`,
    borderRadius: '20px',
    backgroundColor: 'white',
    padding: '20px',
    [MEDIUM_AND_SMALL_SCREEN]: {
      width: '100vw',
      position: 'absolute',
      left: 1,
    },
  },
  popperSubContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  closeBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  popperStyles: {
    paddingLeft: 5,
    width: '569px',
    [MEDIUM_AND_SMALL_SCREEN]: {},
  },
  tooltipImage: {
    width: '20%',
  },
  childrenContainer: {
    width: '75%',
  },
} satisfies IStyles;
