import Container from '@/components/container/Container';
import Table from '@/components/table/Table';
import { useFormContext } from '@/context/form/formContext';
import { FormValues, KidsSummary } from '@/context/form/types';
import { TEXT_BLUE } from '@/styles/colors';
import { formatNumberIntoCommas } from '@/utils/utils';
import { Box } from '@mui/material';
import React from 'react';

function KidsInformation() {
  const {
    result,
    formValues: { kidsStep },
  } = useFormContext();
  const kidsData = result?.goal_summary.kids_summary;

  return (
    <Container sx={{ boxShadow: 0, margin: 0 }}>
      <Table
        headings={[
          'Summary',
          'Monthly Savings Needed ($)',
          'You are Already Saving ($)',
          'Additional Monthly Savings Needed ($)',
        ].map((item) => item.toUpperCase())}
        data={getTableData(kidsData as [], kidsStep)}
      />
    </Container>
  );
}

export default KidsInformation;

const color = { sx: { color: TEXT_BLUE } };

const getTableData = (
  data: KidsSummary[],
  kidsInputData: FormValues['kidsStep']
) => {
  const array: any[] = data.map((item, index) => ({
    child: `Child ${index + 1}`,
    monthlySavingsNeeded: item.contribution_needed,
    alreadySaving: kidsInputData[index].monthlyContribution,
    additionalSavings: item.additional_contribution_needed,
  }));

  const finalArray = array;

  finalArray.push({
    child: <Box {...color}> TOTAL</Box>,
    monthlySavingsNeeded: (
      <Box {...color}>
        $
        {formatNumberIntoCommas(
          finalArray.reduce(
            (acc, item) => (acc += item.monthlySavingsNeeded),
            0
          )
        )}
      </Box>
    ),
    alreadySaving: (
      <Box {...color}>
        $
        {formatNumberIntoCommas(
          finalArray.reduce((acc, item) => (acc += item.alreadySaving), 0)
        )}
      </Box>
    ),
    additionalSavings: (
      <Box {...color}>
        $
        {formatNumberIntoCommas(
          finalArray.reduce((acc, item) => (acc += item.additionalSavings), 0)
        )}
      </Box>
    ),
  });

  return finalArray;
};
