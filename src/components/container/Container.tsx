import {
  Box,
  Container as MuiContainer,
  ContainerProps,
  SxProps,
  Theme,
} from '@mui/material';
import React from 'react';
import MyToolTip from '../tooltip/Tooltip';
import { styles } from './styles';

const { containerStyle, containerHeader, tooltipAndHeaderContainer } = styles;
export interface IContainer extends ContainerProps {
  header?: string;
  tooltip?: React.ReactNode;
  headerStyles?: SxProps<Theme>;
}

function Container({
  header,
  children,
  tooltip,
  maxWidth,
  headerStyles,
  ...rest
}: IContainer) {
  return (
    <MuiContainer {...rest} sx={{ ...containerStyle, ...rest.sx }}>
      <Box sx={tooltipAndHeaderContainer}>
        <Box />
        <Box sx={headerStyles || containerHeader}>{header}</Box>
        <Box>
          {tooltip && (
            <Box>
              <MyToolTip>{tooltip}</MyToolTip>
            </Box>
          )}
        </Box>
      </Box>
      {children}
    </MuiContainer>
  );
}

export default Container;
