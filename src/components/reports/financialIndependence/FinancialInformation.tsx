import Container from '@/components/container/Container';
import { PRIMARY_GREEN, PRIMARY_RED } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';
import Image from 'next/image';
import { useFormContext } from '@/context/form/formContext';

const {
  resultsContainer,
  childContainer,
  childSection,
  sectionTitle,
  sectionDetail,
} = styles;

const FinancialInformation = () => {
  const { result } = useFormContext();

  const retirementInfo = result?.goal_summary?.retirement_summary;

  const isStatusOkay = retirementInfo?.retirement_status === 'On Track';
  const status = retirementInfo?.retirement_status;
  return (
    <Container
      sx={{
        padding: 0,
        boxShadow: 0,
      }}
    >
      <Box sx={resultsContainer}>
        <Box sx={childContainer}>
          <Image
            src='/assets/images/saving_type_2.svg'
            alt=''
            width={200}
            height={200}
          />
        </Box>
        <Box sx={childContainer}>
          <Box sx={childSection}>
            <Typography variant='h5' sx={sectionTitle}>
              Your Target Age for Retirement
            </Typography>
            <Typography sx={sectionDetail}>
              {retirementInfo?.your_target_retirement_age}
            </Typography>{' '}
          </Box>
        </Box>
        <Box sx={childContainer}>
          <Box sx={childSection}>
            <Typography variant='h5' sx={sectionTitle}>
              Earliest Age You Can Retire
            </Typography>
            <Typography sx={sectionDetail}>
              {retirementInfo?.earliest_retirement_age}
            </Typography>{' '}
          </Box>
        </Box>
        <Box sx={{ ...childContainer, borderRight: '0px' }}>
          <Box sx={childSection}>
            <Typography variant='h5' sx={sectionTitle}>
              Status
            </Typography>
            <Typography
              sx={{
                ...sectionDetail,
                color: isStatusOkay ? PRIMARY_GREEN : PRIMARY_RED,
                fontSize: '20px',
                textAlign: 'center',
              }}
            >
              {status}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FinancialInformation;
