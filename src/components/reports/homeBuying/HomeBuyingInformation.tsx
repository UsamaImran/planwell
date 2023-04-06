import Container from '@/components/container/Container';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { styles } from './styles';

const {
  resultsContainer,
  childContainer,
  childSection,
  sectionTitle,
  sectionDetail,
} = styles;
function HomeBuyingInformation() {
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
            src='/assets/images/saving_type_1.svg'
            alt=''
            width={200}
            height={200}
          />
        </Box>
        <Box sx={childContainer}>
          <Box sx={childSection}>
            <Typography variant='h5' sx={sectionTitle}>
              Your Target Home Value
            </Typography>
            <Typography sx={sectionDetail}>$1,200,000</Typography>
          </Box>
        </Box>
        <Box sx={childContainer}>
          <Box sx={childSection}>
            <>
              <Typography variant='h5' sx={sectionTitle}>
                Downpayment Needed
              </Typography>
              <Typography sx={sectionDetail}>
                $240,000
                {/* <br /> 20% of Home Value */}
                {/* <Typography variant='subtitle2' color='black'>
                 
                </Typography> */}
              </Typography>
            </>
          </Box>
        </Box>
        <Box sx={{ ...childContainer, borderRight: '0px' }}>
          <Box sx={childSection}>
            <Typography variant='h5' sx={sectionTitle}>
              Age at which you plan to buy home
            </Typography>
            <Typography sx={{ ...sectionDetail }}>39</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default HomeBuyingInformation;
