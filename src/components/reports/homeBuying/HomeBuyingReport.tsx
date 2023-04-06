import Container from '@/components/container/Container';
import React from 'react';
import HomeBuyingChart from './HomeBuyingChart';
import HomeBuyingInformation from './HomeBuyingInformation';
import { styles } from './styles';

const { containerStyles, headerStyles } = styles;

function HomeBuying() {
  return (
    <Container
      sx={containerStyles}
      header={'Goal: Home Buying'}
      headerStyles={headerStyles}
    >
      <HomeBuyingInformation />
      <HomeBuyingChart />
    </Container>
  );
}

export default HomeBuying;
