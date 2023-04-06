import Container from '@/components/container/Container';
import { PRIMARY_RED } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';
import Image from 'next/image';

const {
  resultsContainer,
  childContainer,
  childSection,
  sectionTitle,
  sectionDetail,
} = styles;

const FinancialInformation = () => {
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
            <Typography sx={sectionDetail}>65</Typography>
          </Box>
        </Box>
        <Box sx={childContainer}>
          <Box sx={childSection}>
            <Typography variant='h5' sx={sectionTitle}>
              Earliest Age You Can Retire
            </Typography>
            <Typography sx={sectionDetail}>68</Typography>
          </Box>
        </Box>
        <Box sx={{ ...childContainer, borderRight: '0px' }}>
          <Box sx={childSection}>
            <Typography variant='h5' sx={sectionTitle}>
              Earliest Age You Can Retire
            </Typography>
            <Typography
              sx={{ ...sectionDetail, color: PRIMARY_RED, fontSize: '20px' }}
            >
              Additional Savings Needed
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FinancialInformation;
