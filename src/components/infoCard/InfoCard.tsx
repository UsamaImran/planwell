import { BACKGROUND_PURPLE } from '@/styles/colors';
import { darkenColor } from '@/utils/utils';
import { Box, BoxProps, Typography } from '@mui/material';

import React from 'react';
import { styles } from './styles';

const { infoCardContainer, subContainer } = styles;

interface IInfoCard extends BoxProps {
  backgroundColor?: string;
  icon?: React.ReactNode;
  cardTitle?: string;
}

function InfoCard({
  cardTitle,
  icon,
  children,
  backgroundColor = BACKGROUND_PURPLE,
  ...props
}: IInfoCard) {
  return (
    <Box sx={{ ...infoCardContainer, ...props.sx, backgroundColor }} {...props}>
      <Box sx={subContainer}>
        {icon}
        {cardTitle && (
          <Box>
            <Typography
              variant='h4'
              sx={{
                color: darkenColor(backgroundColor, 40),
              }}
            >
              {cardTitle}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default InfoCard;
