import { useFormContext } from '@/context/form/formContext';
import { Box } from '@mui/material';
import React from 'react';
import PersonalInfo from '../personalInfo/PersonalInfo';
import FinancialIndependence from '../reports/financialIndependence/FinancialIndependenceReport';
import HomeBuyingReport from '../reports/homeBuying/HomeBuyingReport';
import KidsCollegeReport from '../reports/KidsCollege/KidsCollegeReport';
import TotalAssetsReport from '../reports/totalAssets/TotalAssetsReport';

function Results() {
  const {
    formValues: { goals, kidsStep },
  } = useFormContext();

  const renderHomeBuyingGoals = () =>
    goals.includes('HOME') && <HomeBuyingReport />;

  const renderKidsCollegeReport = () =>
    goals.includes('COLLEGE') && !!kidsStep.length && <KidsCollegeReport />;

  return (
    <Box>
      <TotalAssetsReport />
      <FinancialIndependence />
      {renderHomeBuyingGoals()}
      {renderKidsCollegeReport()}
      <PersonalInfo />
    </Box>
  );
}

export default Results;
