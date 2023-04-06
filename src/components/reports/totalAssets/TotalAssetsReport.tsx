import Table from '@/components/table/Table';
import TooltipImage from '@/components/tooltip/TooltipImage';
import { TEXT_BLUE } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import React from 'react';
import AreaChart from '../../charts/AreaChart';
import Container from '../../container/Container';
import { styles } from './styles';

const {
  headerStyles,
  containerStyles,
  titleStyles,
  tableContainer,
  tableSectionTitle,
} = styles;

function TotalAssetsReport() {
  return (
    <Container
      sx={containerStyles}
      header={'Your Results'}
      headerStyles={headerStyles}
    >
      <Box sx={titleStyles}>
        <Typography sx={{ color: TEXT_BLUE }}>
          TOTAL LIQUID ASSETS BY AGE
        </Typography>
      </Box>
      <Box>
        <AreaChart />
      </Box>
      <Box sx={tableContainer}>
        <Box sx={tableSectionTitle}>
          <Typography sx={{ color: TEXT_BLUE }}>
            Summary : ARE YOU ON TRACK FOR ALL YOUR GOALS?
          </Typography>
          <TooltipImage />
        </Box>
        <Table headings={['usama', 'huzaifa', 'adeel', 'fahad', 'hassan']} />
      </Box>
    </Container>
  );
}

export default TotalAssetsReport;
