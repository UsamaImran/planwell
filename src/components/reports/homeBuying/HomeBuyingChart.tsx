import { PieChart } from '@/components/charts/PieChart';
import Container from '@/components/container/Container';
import Table from '@/components/table/Table';
import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { Box } from '@mui/material';
import React from 'react';

function HomeBuyingChart() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          [MEDIUM_AND_SMALL_SCREEN]: { flexDirection: 'column-reverse' },
        }}
      >
        <Box sx={{ flex: 2 }}>
          <PieChart />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Table displayHeader={false} />
        </Box>
      </Box>
    </Container>
  );
}

export default HomeBuyingChart;
