import { useFormContext } from '@/context/form/formContext';
import React from 'react';
import Container from '../../container/Container';
import CollegeGoals from '../components/CollegeGoals';
import HomeBuyingGoals from '../components/HomeBuyingGoals';
import RetirementGoals from '../components/RetirementGoals';
import { commonStyles } from '../styles';

function FinalStep() {
  const {
    formValues: { kidsStep },
  } = useFormContext();
  return (
    <Container header='Set Your Goals' sx={commonStyles.wrapperContainer}>
      <RetirementGoals />
      <HomeBuyingGoals />
      {!!kidsStep.length && <CollegeGoals />}
    </Container>
  );
}

export default FinalStep;
