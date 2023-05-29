import Table from '@/components/table/Table';
import { useFormContext } from '@/context/form/formContext';
import { Goal, Result } from '@/context/form/types';
import { TEXT_BLUE } from '@/styles/colors';
import { formatAsCurrency } from '@/utils/utils';
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
  const {
    formValues: { goals },
    result,
  } = useFormContext();

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
      <Box sx={{ overflow: 'auto' }}>
        <AreaChart />
      </Box>
      <Box sx={tableContainer}>
        <Box sx={tableSectionTitle}>
          <Typography sx={{ color: TEXT_BLUE }}>
            SUMMARY : ARE YOU ON TRACK FOR ALL YOUR GOALS?
          </Typography>
        </Box>
        <Table
          headings={[
            'GOALS',
            'STATUS',
            'TOTAL CONTRIBUTION NEEDED (ANNUAL)',
            'YOU ARE ALREADY CONTRIBUTING (ANNUAL)',
            'ADDITIONAL CONTRIBUTION NEEDED (ANNUAL)',
          ]}
          data={getTableRows(goals, result!)}
        />
      </Box>
    </Container>
  );
}

export default TotalAssetsReport;

const getTableRows = (goals: Goal[], result: Result) => {
  const {
    goal_summary: { kids_summary, retirement_summary },
  } = result;
  const kidsData = kids_summary;
  const areKidsOkay = kidsData.some((item) => item.status === 'On Track');
  const isRetirementOkay = retirement_summary.retirement_status === 'On Track';
  const retirementTotal =
    retirement_summary.current_yearly_contributions +
    retirement_summary.additional_yearly_contribution_needed;
  const array = [
    {
      goal: 'Retirement',
      status: (
        <Box sx={{ color: isRetirementOkay ? 'green' : 'red' }}>
          {retirement_summary.retirement_status}
        </Box>
      ),
      totalContribution: formatAsCurrency(
        retirementTotal || retirement_summary.yearly_contribution_needed
      ),
      alreadyContributing: formatAsCurrency(
        retirement_summary.current_yearly_contributions
      ),
      additionalContribution: formatAsCurrency(
        retirement_summary.additional_yearly_contribution_needed
      ),
    },
    {
      goal: 'Kids College',
      status: (
        <Box sx={{ color: !areKidsOkay ? 'red' : 'green' }}>
          {!areKidsOkay ? 'Additional contribution needed' : 'ON TRACK'}
        </Box>
      ),
      totalContribution: formatAsCurrency(
        kidsData.reduce(
          (acc, item) =>
            (acc +=
              item.current_yearly_contributions +
              item.additional_yearly_contribution_needed),
          0
        )
      ),
      alreadyContributing: formatAsCurrency(
        kidsData.reduce(
          (acc, item) => (acc += item.current_yearly_contributions),
          0
        )
      ),
      additionalContribution: formatAsCurrency(
        kidsData.reduce(
          (acc, item) => (acc += item.additional_yearly_contribution_needed),
          0
        )
      ),
    },
    {
      goal: 'Home Buying',
      status: <Box sx={{ color: 'green' }}>N/A</Box>,
      totalContribution: '$55,507',
      alreadyContributing: 'N/A',
      additionalContribution: 'N/A',
    },
  ];

  const finalArray = !kidsData.length
    ? array.filter((item) => item.goal !== 'Kids College')
    : !goals.includes('HOME')
    ? array.filter((item) => item.goal !== 'Home Buying')
    : !goals.includes('FIRE')
    ? array.filter((item) => item.goal === 'Retirement')
    : array;

  return finalArray;
};
