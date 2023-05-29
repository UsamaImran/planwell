import { useFormContext } from '@/context/form/formContext';
import React from 'react';
import Container from '../../container/Container';
import CollegeGoals from '../components/CollegeGoals';
import HomeBuyingGoals from '../components/HomeBuyingGoals';
import RetirementGoals from '../components/RetirementGoals';
import { commonStyles } from '../styles';

function FinalStep() {
  const {
    formValues: { kidsStep, goals },
  } = useFormContext();

  const renderHomeBuyingGoals = goals.includes('HOME');
  return (
    <Container sx={commonStyles.wrapperContainer}>
      <RetirementGoals />
      {renderHomeBuyingGoals && <HomeBuyingGoals />}
      {!!kidsStep.length && <CollegeGoals />}
    </Container>
  );
}

export default FinalStep;
