import Container from '@/components/container/Container';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const FinancialRecommendations = () => {
  return (
    <Container>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ flex: 3, display: 'flex', gap: 3, alignItems: 'center' }}>
            <Image
              src='/assets/images/warning.svg'
              width={50}
              height={50}
              alt=''
            />
            <Typography>
              Additional Savings Needed to Retire at Your Target Age
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography>$ 10,000</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography>Annually</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 3,
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            marginY: '40px',
          }}
        >
          <Image
            src='/assets/images/warning.svg'
            width={50}
            height={50}
            alt=''
          />
          <Typography>
            Your expenses could be too high and cause negative cash flow in some
            years! Please review expenses and reduce discretionary spending!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default FinancialRecommendations;
