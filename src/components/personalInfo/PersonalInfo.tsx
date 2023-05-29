import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../button/Button';
import Container from '../container/Container';
import Input from '../input/Input';
import { styles } from './styles';

const {
  containerStyles,
  subContainer,
  inputContainer,
  buttonContainer,
  button,
  inputLabels,
  link,
} = styles;

function PersonalInfo() {
  return (
    <Container sx={containerStyles}>
      <Box sx={subContainer}>
        <Box sx={inputContainer}>
          <Box>
            <Typography sx={inputLabels} variant='h5'>
              Name*
            </Typography>
          </Box>
          <Box>
            <Input type='text' placeholder=' ' showAdornment={false} />
          </Box>
        </Box>
        <Box sx={inputContainer}>
          <Box>
            <Typography sx={inputLabels} variant='h5'>
              Email*
            </Typography>
          </Box>
          <Box>
            <Input type='text' placeholder=' ' showAdornment={false} />
          </Box>
        </Box>
      </Box>
      <Box sx={buttonContainer}>
        <Button sx={button}>Email PDF</Button>
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography sx={link} variant='subtitle1'>
          How do we Generate Results?
        </Typography>
      </Box>
    </Container>
  );
}

export default PersonalInfo;
