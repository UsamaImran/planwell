import Container from '@/components/container/Container';
import React from 'react';
import KidsInformation from './KidsInformation';
import KidsInformationChart from './KidsInformationChart';
import { styles } from './styles';

const { containerStyles, headerStyles } = styles;

function KidsCollegeReport() {
  return (
    <Container
      sx={containerStyles}
      header={'Goal: Kids College'}
      headerStyles={headerStyles}
    >
      <KidsInformation />
      <KidsInformationChart />
    </Container>
  );
}
export default KidsCollegeReport;
