import { darkenColor } from '@/utils/utils';
import { Box, Theme, Typography } from '@mui/material';
import { BoxProps, SxProps } from '@mui/system';
import React from 'react';
import MyToolTip from '../tooltip/Tooltip';
import { styles } from './styles';

const {
  inputContainerStyle,
  titleContainer,
  inputContainerChild,
  additionalInfo,
} = styles;

interface IInputContainer extends BoxProps {
  header?: React.ReactNode;
  backgroundColor?: string;
  title?: string;
  tooltip?: React.ReactNode;
  additionalInformation?: React.ReactNode;
  containerStyles?: SxProps<Theme>;
}

function InputContainer({
  header,
  children,
  title = '',
  tooltip,
  backgroundColor = 'white',
  additionalInformation,
  containerStyles = {},
  ...props
}: IInputContainer) {
  return (
    <Box {...props} sx={{ ...inputContainerStyle, backgroundColor }}>
      <Box>{header}</Box>
      <Box sx={{ ...inputContainerChild }}>
        <Box sx={titleContainer}>
          <Typography sx={{ color: darkenColor(backgroundColor) }}>
            {title}
          </Typography>
          {tooltip && <MyToolTip>{tooltip}</MyToolTip>}
        </Box>
        <Box>{children}</Box>{' '}
      </Box>
      <Box sx={{ additionalInfo, ...containerStyles }}>
        {additionalInformation}
      </Box>
    </Box>
  );
}

export default InputContainer;
