import { EXPENSES_OPTIONS } from '@/constants/constants';
import { useFormContext } from '@/context/form/formContext';
import { convertCommaStringBackToNumber } from '@/utils/utils';
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

function ExpensesStep() {
  const {
    formValues: { expenseStep },
    onFormValuesChange,
  } = useFormContext();

  const { expenseType, customExpenseValue } = expenseStep;

  const handleValuesChange = <T extends keyof typeof expenseStep>(
    key: T,
    value: boolean | number | number[] | string | null
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
            <Box sx={{ ...radioContainer, alignItems: 'flex-start' }}>
              <Radio
                id={'custom'}
                checked={expenseType === 'custom'}
                onChange={(e) => handleValuesChange('expenseType', 'custom')}
              />
              <label htmlFor={'custom'}>
                <Typography sx={{ marginTop: 0.7 }}>
                  Enter Custom Value <br />
                  <small
                    style={{
                      color: 'lightgray',
                      paddingLeft: 10,
                      fontSize: '15px',
                    }}
                  >
                    Monthly Expenses
                  </small>
                </Typography>
              </label>
            </Box>

            <label htmlFor={'custom'}>
              <Box
                role={'button'}
                onClick={() => handleValuesChange('expenseType', 'custom')}
              >
                <Input
                  label='Expenses'
                  type='text'
                  sx={{ width: '250px' }}
                  value={customExpenseValue?.toLocaleString() || ''}
                  disabled={expenseType !== 'custom'}
                  onChange={(e) => {
                    const value = e.target.value;

                    handleValuesChange(
                      'customExpenseValue',
                      convertCommaStringBackToNumber(value) || 0
                    );
                  }}
                />
              </Box>{' '}
            </label>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ExpensesStep;
