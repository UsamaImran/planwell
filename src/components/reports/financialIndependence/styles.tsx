import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { TEXT_BLUE, TEXT_GRAY } from '@/styles/colors';
import { IStyles } from '@/types/global';

export const styles = {
  headerStyles: {
    backgroundColor: TEXT_BLUE,
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    color: 'white',
    fontWeight: 500,
  },
  containerStyles: { padding: '0px !important' },
  resultsContainer: {
    display: 'flex',
    gap: 3,
    flex: 1,
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
  },
  childContainer: {
    borderWidth: '1px',
    borderRight: '1px dotted gray',
    flex: 1,

    [MEDIUM_AND_SMALL_SCREEN]: {
      borderWidth: 0,
    },
  },
  childSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 7,
    gap: 5,
    alignItems: 'center',
  },
  sectionTitle: { color: TEXT_GRAY },
  sectionDetail: { fontSize: '30px', color: TEXT_BLUE },
  financialSuggestionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [MEDIUM_AND_SMALL_SCREEN]: {
      flexDirection: 'column',
      alignContent: 'start',
      justifyContent: 'start',
    },
  },
} satisfies IStyles;
