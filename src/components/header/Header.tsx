import { getTimeAndDate } from '@/utils/utils';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  const { day, greet } = getTimeAndDate();
  return (
    <Box
      style={{
        height: 322,
        background:
          'linear-gradient(90deg, rgba(39,55,163,1) 0%, rgba(49,66,185,1) 0%, rgba(53,72,197,1) 100%)',
        objectPosition: 'center',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      sx={{
        height: '322px',
        backgroundSize: { md: 'contain', xs: 'cover' },
        px: { md: 15, xs: 'auto' },
      }}
    >
      <Navbar />
      <Container>
        <Box
          sx={{
            color: 'white',
            mt: 5,
            width: { md: '50%', xs: '100%' },
          }}
        >
          <Typography
            variant='h3'
            sx={{
              lineHeight: '36px',
              lineHeightStep: '36px',
              fontFamily: 'DM Sans',
              letterSpacing: '-0.4px',
              fontSize: '30px',
              fontWeight: 700,
              minWidth: '295.41px',
              textTransform: 'capitalize',
            }}
          >
            {greet}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              letterSpacing: '-0.4px',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              pt: 1,
              fontFamily: 'DM Sans',
              minWidth: '199.28px',
              textTransform: 'capitalize',
            }}
          >
            {day}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
