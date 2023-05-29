import { getTimeAndDate } from '@/utils/utils';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import { headerCSS, headerStyles } from './styles';

const {
  headerContainer,
  navContainer,
  greet: greetStyle,
  day: dayStyle,
} = headerStyles;

const Header = () => {
  const { day, greet } = getTimeAndDate();
  return (
    <Box style={headerCSS} sx={headerContainer}>
      <Navbar />
      <Container>
        <Box sx={navContainer}>
          <Typography variant='h3' sx={greetStyle}>
            {greet}
          </Typography>
          <Typography variant='h6' sx={dayStyle}>
            {day}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
