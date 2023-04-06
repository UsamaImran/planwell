import { useFormContext } from '@/context/form/formContext';
import { Goal } from '@/context/form/types';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Card from '../../card/Card';
import { goalStepStyles } from '../styles';

const { heading, subHeading, headingsContainer, cardsContainer } =
  goalStepStyles;

const CARDS_DATA = [
  {
    label: 'Buy a home',
    id: 1,
    imgSrc: '/assets/images/saving_type_1.svg',
    dataKey: 'HOME',
  },
  {
    label: 'Kids College',
    id: 2,
    imgSrc: '/assets/images/saving_type_2.svg',
    dataKey: 'COLLEGE',
  },
  {
    label: 'FIRE',
    id: 3,
    imgSrc: '/assets/images/saving_type_3.svg',
    dataKey: 'FIRE',
  },
];

function GoalStep() {
  const {
    formValues: { goals, kidsStep },
    onFormValuesChange,
  } = useFormContext();

  const handleGoalSelect = (goal: boolean, data: Goal) => {
    let finalGoals = [];

    if (goal) {
      goals.push(data);
      finalGoals = [...goals];
    } else {
      finalGoals = goals.filter((item) => item !== data);
    }
    onFormValuesChange('goals', finalGoals);
    const shouldEmptyKids = !finalGoals.includes('COLLEGE');
    onFormValuesChange('kidsStep', shouldEmptyKids ? [] : kidsStep);
  };

  return (
    <Box sx={{ width: '1110px' }}>
      <Box sx={headingsContainer}>
        <Typography variant='h4' sx={heading}>
          Generate Your Comprehensive Financial Plan
        </Typography>
        <Typography variant='h5' sx={subHeading}>
          Which goals would you like to plan for?
        </Typography>
      </Box>
      <Box sx={cardsContainer}>
        {CARDS_DATA.map((item) => (
          <Card
            key={item.id}
            checked={goals.includes(item.dataKey as Goal)}
            label={item.label}
            image={item.imgSrc}
            onValueChecked={(g) => handleGoalSelect(g, item.dataKey as Goal)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default GoalStep;
