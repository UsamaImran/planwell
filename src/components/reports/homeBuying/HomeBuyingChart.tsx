import Accordion from '@/components/accordion/Accordion';
import { PieChart } from '@/components/charts/PieChart';
import Container from '@/components/container/Container';
import Table from '@/components/table/Table';
import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { TEXT_BLUE } from '@/styles/colors';
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
          <Accordion
            sx={{ boxShadow: '0' }}
            title='Monthly Payments'
            defaultExpanded
            titleStyles={{
              textAlign: 'left',
              justifyContent: 'space-between',
              color: TEXT_BLUE,
            }}
            summaryProps={{ sx: { height: '10px' } }}
          >
            <Table displayHeader={false} data={getTableData()} />
          </Accordion>
        </Box>
      </Box>
    </Container>
  );
}

export default HomeBuyingChart;

const getTableData = () => {
  return [
    { type: 'Monthly mortgage payment', value: '$4,542' },
    { type: 'Property Tex', value: '$1,000' },
    { type: 'HOA / Other', value: '$150' },
    {
      type: <Box sx={{ color: TEXT_BLUE }}>Total Monthly Expenses</Box>,
      value: '$5,69 2',
    },
  ];
};
