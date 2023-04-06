import TotalAssetsReport from '@/components/reports/totalAssets/TotalAssetsReport';
import { Box } from '@mui/material';
import React from 'react';
import FinancialIndependence from '@/components/reports/financialIndependence/FinancialIndependenceReport';
import HomeBuyingReport from '@/components/reports/homeBuying/HomeBuyingReport';
import KidsCollegeReport from '@/components/reports/KidsCollege/KidsCollegeReport';
import PersonalInfo from '@/components/personalInfo/PersonalInfo';

function Results() {
  return (
    <main>
      <Box>
        <TotalAssetsReport />
        <FinancialIndependence />
        <HomeBuyingReport />
        <KidsCollegeReport />
        <PersonalInfo />
      </Box>
    </main>
  );
}

export default Results;
