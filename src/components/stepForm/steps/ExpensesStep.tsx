import { useFormContext } from '@/context/form/formContext';
import { LIGHT_BLUE, LIGHT_GREEN, LIGHT_PINK } from '@/styles/colors';
import { Box, Radio, Typography } from '@mui/material';
import React from 'react';
import Container from '../../container/Container';
import Input from '../../input/Input';
import { expensesStepStyles, commonStyles } from '../styles';

const {
  subContainer,
  typographyContainer,
  BoxContainer,
  singleBox,
  coloredBox,
  customContainer,
  inputContainer,
  radioContainer,
} = expensesStepStyles;

const EXPENSES_OPTIONS = [
  {
    id: 1,
    color: LIGHT_GREEN,
    label: 'Super Saver:  Expenses are 50% of Income',
    type: 'SUPER',
  },
  {
    id: 2,
    color: LIGHT_BLUE,
    label: 'Average Saver:  Expenses are 75% of Income',
    type: 'AVERAGE',
  },
  {
    id: 3,
    color: LIGHT_PINK,
    label: 'Spender:  Expenses are 90% of Income',
    type: 'SPENDER',
  },
];

function ExpensesStep() {
  const {
    formValues: { expenseStep },
    onFormValuesChange,
  } = useFormContext();

  const { expenseType, customExpenseValue } = expenseStep;

  const handleValuesChange = <T extends keyof typeof expenseStep>(
    key: T,
    value: boolean | number | number[] | string
  ) => {
    const val =
      typeof value !== 'string' ? (value as number) : (value as string);

    onFormValuesChange('expenseStep', { ...expenseStep, [key]: val });
  };

  return (
    <Container
      header='Enter Monthly Expenses'
      sx={commonStyles.wrapperContainer}
    >
      <Box sx={subContainer}>
        <Box sx={typographyContainer}>
          <Typography>
            Figuring out your expenses can be hard. You can choose a spending
            type or enter it on your own.
          </Typography>
        </Box>
        <Box sx={BoxContainer}>
          {EXPENSES_OPTIONS.map((option) => (
            <Box sx={singleBox} key={option.id}>
              <label
                htmlFor={option.type}
                style={singleBox as React.CSSProperties}
              >
                <Box
                  sx={{
                    backgroundColor: option.color,
                    ...coloredBox,
                  }}
                />

                <Box sx={radioContainer}>
                  <Radio
                    id={option.type}
                    checked={expenseType === option.type}
                    onChange={(e) =>
                      handleValuesChange('expenseType', option.type)
                    }
                  />
                  <Typography>{option.label}</Typography>
                </Box>
              </label>
            </Box>
          ))}
        </Box>
        <Box sx={customContainer}>
          <Typography>OR</Typography>
          <Box sx={inputContainer}>
            <Typography>
              Enter Custom Value
              <Typography variant='subtitle2'>Expenses</Typography>
            </Typography>
            <Box>
              <Input
                label='Expenses'
                placeholder='$0'
                type='number'
                value={customExpenseValue || 0}
                onChange={(e) =>
                  handleValuesChange('customExpenseValue', +e.target.value)
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ExpensesStep;
