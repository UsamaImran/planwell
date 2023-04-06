import Container from '@/components/container/Container';

import React from 'react';
import FinancialInformation from './FinancialInformation';
import FinancialRecommendations from './FinancialRecommendations';
import { styles } from './styles';

const { containerStyles, headerStyles } = styles;

function FinancialIndependence() {
  return (
    <Container
      sx={containerStyles}
      header={'Financial Independence & Retirement'}
      headerStyles={headerStyles}
    >
      <FinancialInformation />
      <FinancialRecommendations />
    </Container>
  );
}

export default FinancialIndependence;
