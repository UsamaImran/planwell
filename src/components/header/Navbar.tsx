import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Link from 'next/link';

const { toolbar, title, titleMobile, titleMobile1 } = styles;

const Navbar = () => {
  return (
    <AppBar
      position='static'
      elevation={0}
      style={{ background: 'transparent' }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={toolbar}>
            <BusinessCenterIcon />
            <Typography
              variant='h6'
              noWrap
              component={Link}
              href='/'
              sx={title}
            >
              Planwell.io
            </Typography>
          </Box>
          <Box sx={titleMobile}></Box>
          <Typography
            variant='h5'
            noWrap
            component={Link}
            href='/'
            sx={titleMobile1}
          >
            Planwell.io
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
