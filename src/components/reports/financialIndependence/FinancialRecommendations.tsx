import Container from '@/components/container/Container';
import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { useFormContext } from '@/context/form/formContext';
import { TEXT_BLUE } from '@/styles/colors';
import { formatNumber } from '@/utils/utils';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { styles } from './styles';

const { financialSuggestionContainer } = styles;

const FinancialRecommendations = () => {
  const { result } = useFormContext();

  const retirementInfo = result?.goal_summary?.retirement_summary;
  const isStatusOkay = retirementInfo?.retirement_status === 'On Track';
  const status = retirementInfo?.suggested_action;

  return (
    <Container>
      <Box>
        <Box sx={financialSuggestionContainer}>
          <Box
            sx={{
              display: 'flex',
              width: '49%',
              gap: 3,
              alignItems: 'center',
              [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' },
            }}
          >
            <Image
              src={getImageSrc(isStatusOkay)}
              width={50}
              height={50}
              alt=''
            />
            <Typography>
              Additional Savings Needed to Retire at Your Target Age
            </Typography>
          </Box>
          <Box
            sx={{
              width: '27%',
              textAlign: 'center',
              [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' },
            }}
          >
            <Typography sx={{ fontSize: '30px', color: TEXT_BLUE }}>
              $
              {formatNumber(
                retirementInfo?.additional_yearly_contribution_needed || 0
              )}
            </Typography>
          </Box>
          <Box
            sx={{
              width: '25%',
              textAlign: 'center',
              [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' },
            }}
          >
            <Typography>Annually</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            marginY: '40px',
          }}
        >
          <Image
            src={getImageSrc(isStatusOkay)}
            width={50}
            height={50}
            alt=''
          />
          <Typography>{status}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default FinancialRecommendations;

const getImageSrc = (status: boolean) =>
  status ? '/assets/images/Star.svg' : '/assets/images/warning.svg';
