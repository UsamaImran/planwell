import { Button as MuiButton, ButtonProps } from '@mui/material';
import React from 'react';
import { styles } from './styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const { buttonStyles } = styles;

interface IButton extends ButtonProps {
  displayNextIcon?: boolean;
  displayBackIcon?: boolean;
}

function Button({
  displayBackIcon = false,
  displayNextIcon = true,
  children,
  startIcon,
  endIcon,
  ...rest
}: IButton) {
  return (
    <MuiButton
      {...rest}
      sx={{ ...buttonStyles, ...rest.sx }}
      variant={rest.variant || 'contained'}
      endIcon={displayNextIcon ? <ChevronRightIcon /> : <>{endIcon}</>}
      startIcon={displayBackIcon ? <ChevronLeftIcon /> : <>{startIcon}</>}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
