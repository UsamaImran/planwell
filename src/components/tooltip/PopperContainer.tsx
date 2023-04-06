import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Container from '../container/Container';
import { styles } from './styles';
import TooltipImage from './TooltipImage';
import CloseIcon from '@mui/icons-material/Close';

const {
  popperContainerStyles,
  closeBtn,
  popperSubContainer,
  tooltipImage,
  childrenContainer,
} = styles;

interface IPopperContainer extends PropsWithChildren {
  onClose: () => void;
}

function PopperContainer({ onClose, children }: IPopperContainer) {
  return (
    <Container sx={popperContainerStyles}>
      <Box sx={popperSubContainer}>
        <Box sx={tooltipImage}>
          <TooltipImage />
        </Box>
        <Box sx={childrenContainer}>{children}</Box>
        <Box sx={closeBtn}>
          <CloseIcon onClick={onClose} />
        </Box>
      </Box>
    </Container>
  );
}

export default PopperContainer;
