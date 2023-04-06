import Input from '@/components/input/Input';
import InputSlider from '@/components/input/InputSlider';
import Select from '@/components/select/Select';
import {
  CHILD_COLLEGE_OPTIONS,
  CHILD_GOALS_RADIO_OPTIONS,
} from '@/constants/constants';
import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_PURPLE } from '@/styles/colors';
import { addCommasToNumber } from '@/utils/utils';
import { Box, Radio, Typography } from '@mui/material';
import React from 'react';
import Accordion from '../../accordion/Accordion';
import Container from '../../container/Container';
import InputContainer from '../../container/InputContainer';
import {
  commonStyles,
  incomeStepStyles,
  retirementAdditionalInfoStyles,
  kidsGoalItemStyles,
} from '../styles';

const { infoContainer, tooltipHeading: heading } = commonStyles;
const { tooltipHeading, tooltipSubHeading } = incomeStepStyles;
const { tooltipContainer } = retirementAdditionalInfoStyles;

function CollegeGoals() {
  const {
    formValues: { kidsStep },
  } = useFormContext();
  return (
    <InputContainer
      title='College Goals'
      backgroundColor={BACKGROUND_PURPLE}
      additionalInformation={<AdditionalInformation />}
    >
      {kidsStep.map((_, index) => (
        <CollegeGoalItem index={index} key={index} />
      ))}
    </InputContainer>
  );
}

export default CollegeGoals;

const { container, childItem, childContainer, radioContainer, selectStyles } =
  kidsGoalItemStyles;

const CollegeGoalItem = ({ index }: { index: number }) => {
  const currentKid = index + 1;
  const {
    formValues: { finalStep },
    onFormValuesChange,
  } = useFormContext();
  const { kidsGoals } = finalStep;
  const currentGoal = kidsGoals.goals[index];
  const goalType = currentGoal.goalType;

  const handleValueChange = <T extends keyof typeof kidsGoals.goals[0]>(
    key: T,
    value: any
  ) => {
    const final = [...kidsGoals.goals];
    final[index] = { ...currentGoal, [key]: value };
    onFormValuesChange('finalStep', {
      ...finalStep,
      kidsGoals: {
        goals: [...final],
        assumptions: { ...kidsGoals.assumptions },
      },
    });
  };

  const renderSelect = () => {
    return (
      <Select
        showNone={false}
        sx={selectStyles}
        size='small'
        label=''
        onSelectOption={(value) => {
          const currentValue = CHILD_COLLEGE_OPTIONS.find(
            (item) => item.value === value
          )?.value as number;

          handleValueChange('collegeOptions', currentValue);
        }}
        value={
          CHILD_COLLEGE_OPTIONS.find(
            (item) => item.value === currentGoal.collegeOptions.value
          )?.value as number
        }
        options={CHILD_COLLEGE_OPTIONS.map(({ title, id, value }) => ({
          id,
          label: (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography sx={{ flex: 1 }}>{title}</Typography>
              <Typography sx={{ flex: 1 }} color='blue'>
                ${addCommasToNumber(`${value}`)}
              </Typography>
            </Box>
          ),
          value: value,
        }))}
      />
    );
  };

  return (
    <Box sx={container}>
      <Box>
        <Typography sx={childItem} variant='h6'>
          Child {currentKid}
        </Typography>
      </Box>
      <Box sx={childContainer}>
        <Box sx={{ display: 'flex' }}>
          {CHILD_GOALS_RADIO_OPTIONS.map((item, index) => (
            <Box sx={radioContainer} key={item.id}>
              <Radio
                checked={currentGoal.goalType === (item.value as any)}
                onChange={() => handleValueChange('goalType', item.value)}
              />
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Box>

        <Box>
          {goalType === 'COLLEGE' ? (
            renderSelect()
          ) : (
            <Input
              sx={{ width: '250px' }}
              type='number'
              onChange={(e) =>
                handleValueChange('customValue', +e.target.value)
              }
            />
          )}
        </Box>
      </Box>
      <Box sx={childContainer}>
        <Box>
          <Typography>% You Plan to Fund</Typography>
        </Box>
        <Box sx={{ paddingTop: '20px' }}>
          <Input
            sx={{ width: '250px' }}
            type='number'
            inputType='percent'
            onChange={(e) =>
              handleValueChange('fundingPercentage', +e.target.value)
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

const AdditionalInformation = () => {
  const {
    formValues: {
      finalStep: { kidsGoals, homeBuyingGoals, retirementGoals },
    },
    onFormValuesChange,
  } = useFormContext();
  const { assumptions } = kidsGoals;
  const { netAnnualCollegeSaving, annualGrowthRate } = assumptions;

  const handleValuesChange = <T extends keyof typeof assumptions>(
    key: T,
    value: number
  ) => {
    onFormValuesChange('finalStep', {
      homeBuyingGoals,
      retirementGoals,
      kidsGoals: {
        ...kidsGoals,
        assumptions: { ...assumptions, [key]: value },
      },
    });
  };

  return (
    <Accordion title='View / Edit Assumptions'>
      <Container sx={infoContainer} tooltip={<AdditionalInfoTooltip />}>
        <InputSlider
          label=' Net Annual Return of College Savings  '
          value={netAnnualCollegeSaving!}
          displaySlider={false}
          inputType='percent'
          onChangeValue={(value) =>
            handleValuesChange('netAnnualCollegeSaving', +value)
          }
        />

        <InputSlider
          label='Annual Growth Rate in College Fees'
          displaySlider={false}
          value={annualGrowthRate!}
          inputType='percent'
          onChangeValue={(value) =>
            handleValuesChange('annualGrowthRate', +value)
          }
        />
      </Container>
    </Accordion>
  );
};

const AdditionalInfoTooltip = () => {
  return (
    <Box sx={tooltipContainer}>
      <Box>
        <Typography sx={heading}>Assumptions</Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>
          Rate of return before retirement:
        </Typography>
        <Typography sx={tooltipSubHeading}>
          This is the annual rate of return you expect from your retirement
          savings and investments
        </Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>
          Rate of Return During Retirement
        </Typography>
        <Typography sx={tooltipSubHeading}>
          This is the annual rate of return you expect from your savings and
          investments during retirement. This is more conservative than before
          retirement.
        </Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>Inflation</Typography>
        <Typography sx={tooltipSubHeading}>
          This is what you expect for the average long-term inflation rate. A
          common measure of inflation in the U.S. is the Consumer Price Index
          (CPI). From 1925 through 2016 the CPI has a long-term average of 2.9%
          annually.
        </Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>Wage Growth</Typography>
        <Typography sx={tooltipSubHeading}>
          Annual growth in wages and salaries.
        </Typography>
      </Box>
    </Box>
  );
};
