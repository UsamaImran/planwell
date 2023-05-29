import Select from '@/components/select/Select';
import { STATES_LIST } from '@/constants/constants';
import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_GREEN, PRIMARY_BLUE } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Accordion from '../../accordion/Accordion';
import Container from '../../container/Container';
import InputContainer from '../../container/InputContainer';

import InputSlider from '../../input/InputSlider';
import {
  commonStyles,
  incomeStepStyles,
  retirementAdditionalInfoStyles,
  styles,
} from '../styles';

const { stateContainer, selectStyles, inputContainer } = styles;
const { tooltipHeading, tooltipSubHeading } = incomeStepStyles;
const { infoContainer, tooltipContainer, boxContainer, boxChild } =
  retirementAdditionalInfoStyles;
const { tooltipHeading: heading } = commonStyles;

function RetirementGoals() {
  const {
    formValues: { finalStep },
    subscriber: { subscribe, publish },
    onFormValuesChange,
  } = useFormContext();

  const { retirementGoals } = finalStep;
  const { currentAge, replaceRetirement, state } = retirementGoals;
  const [stateError, setStateError] = useState(false);

  useEffect(() => {
    subscribe((value) => setStateError(!state && value));
  }, [state, subscribe]);

  const handleValueChange = <T extends keyof typeof retirementGoals>(
    key: T,
    value: string | number | null
  ) => {
    onFormValuesChange('finalStep', {
      ...finalStep,
      retirementGoals: { ...retirementGoals, [key]: value },
    });
    if (key === 'state' && !!value) {
      publish(false);
    }
  };

  return (
    <InputContainer
      title='Retirement Goals'
      backgroundColor={BACKGROUND_GREEN}
      tooltip={<RetirementGoalsToolTip />}
      additionalInformation={<AdditionalInformation />}
      containerStyles={{ paddingX: '0 !important', margin: '0 !important' }}
    >
      {' '}
      <Box sx={inputContainer}>
        <InputSlider
          label='Current Age'
          min={18}
          max={100}
          step={1}
          displaySlider={false}
          type={'age'}
          inputType='age'
          value={currentAge}
          onChangeValue={(value) =>
            handleValueChange('currentAge', value as number)
          }
        />
        <Box sx={stateContainer}>
          <Typography>State you live in</Typography>
          <Box>
            <Select
              size='small'
              placeholder='US'
              sx={selectStyles}
              label=''
              options={STATES_LIST}
              value={state || '0'}
              onSelectOption={(val) => handleValueChange('state', val)}
              error={stateError}
              displayRequired={stateError}
            />
          </Box>
        </Box>
      </Box>
      <InputSlider
        label='What % of your family expenses do you want to replace at retirement?'
        value={replaceRetirement}
        inputType={'percent'}
        displaySlider={false}
        inputProps={{
          placeholder: '70',
          error: !replaceRetirement,
          errorMessage: 'required',
        }}
        max={100}
        onChangeValue={(value) =>
          handleValueChange('replaceRetirement', (value as number) || null)
        }
      />
      <Typography variant='subtitle1' color='GrayText'>
        Guidance for income replacement is 70-85% of your current income. &nbsp;
        <Link
          href={'https://personal.vanguard.com/pdf/ISGRR.pdf'}
          target='_blank'
          style={{ textDecoration: 'none', color: PRIMARY_BLUE }}
        >
          Details.
        </Link>
      </Typography>
    </InputContainer>
  );
}

export default RetirementGoals;

const AdditionalInformation = () => {
  const {
    formValues: {
      finalStep: { retirementGoals, homeBuyingGoals, kidsGoals },
    },
    onFormValuesChange,
  } = useFormContext();

  const { assumptions } = retirementGoals;
  const {
    inflation,
    otherIncome,
    socialSecurity,
    targetReturnRateBefore,
    targetReturnRateDuring,
    wageGrowth,
  } = assumptions;

  const handleValuesChange = <T extends keyof typeof assumptions>(
    key: T,
    value: any
  ) => {
    onFormValuesChange('finalStep', {
      retirementGoals: {
        ...retirementGoals,
        assumptions: { ...assumptions, [key]: value },
      },
      homeBuyingGoals,
      kidsGoals,
    });
  };

  return (
    <Accordion title='View / Edit Assumptions'>
      <Container sx={infoContainer} tooltip={<AdditionalInfoTooltip />}>
        <Box>
          <Typography variant='subtitle2'>
            We have provided default values above. You can input your own values
            as needed.
          </Typography>
        </Box>
        <Box sx={boxContainer}>
          <Box sx={boxChild}>
            <InputSlider
              label='Target rate of return before retirement'
              displaySlider={false}
              value={targetReturnRateBefore!}
              inputProps={{ sx: { width: '100px ' } }}
              step={0.5}
              inputType='percent'
              onChangeValue={(value) =>
                handleValuesChange('targetReturnRateBefore', value)
              }
            />
          </Box>
          <Box sx={boxChild}>
            <InputSlider
              label='Target rate of return during retirement'
              displaySlider={false}
              value={targetReturnRateDuring!}
              step={0.5}
              inputType='percent'
              inputProps={{ sx: { width: '100px ' } }}
              onChangeValue={(value) =>
                handleValuesChange('targetReturnRateDuring', value)
              }
            />
          </Box>
        </Box>
        <Box sx={boxContainer}>
          <Box sx={boxChild}>
            <InputSlider
              label='Wage Growth'
              displaySlider={false}
              value={wageGrowth}
              step={0.5}
              inputType='percent'
              inputProps={{ sx: { width: '100px ' } }}
              onChangeValue={(value) => handleValuesChange('wageGrowth', value)}
            />
          </Box>
          <Box sx={boxChild}>
            <InputSlider
              label='Inflation'
              displaySlider={false}
              value={inflation}
              step={0.5}
              inputType='percent'
              inputProps={{ sx: { width: '100px ' } }}
              onChangeValue={(value) => handleValuesChange('inflation', value)}
            />
          </Box>
        </Box>
        <Box>
          <Typography>Income Expected in Retirement (Annual)</Typography>
        </Box>
        <Box>
          <InputSlider
            label='Social Security'
            displaySlider={false}
            value={socialSecurity!}
            inputProps={{ sx: { width: '200px ' } }}
            onChangeValue={(value) =>
              handleValuesChange('socialSecurity', value)
            }
          />
          <InputSlider
            label='Other Income in Retirement'
            displaySlider={false}
            value={otherIncome!}
            inputProps={{ sx: { width: '200px ' } }}
            onChangeValue={(value) => handleValuesChange('otherIncome', value)}
          />
        </Box>
        <Box>
          <Typography variant='body2'>
            Guidance: Average annual social security was $19,370. “Link” To
            calculate your exact social security benefits, visit the SSA
            website(Link):{' '}
            <a href={'https://www.ssa.gov/OACT/quickcalc/'} target='_blank'>
              https://www.ssa.gov/OACT/quickcalc/
            </a>
          </Typography>
        </Box>
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
        <Typography sx={tooltipHeading}>Inflation </Typography>
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

const RetirementGoalsToolTip = () => {
  return (
    <Box sx={tooltipContainer}>
      <Box>
        <Typography sx={tooltipHeading}>Current Age</Typography>
        <Typography sx={tooltipSubHeading}>
          Your current age. We use this information to calculate all your
          finances until 95.
        </Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>State you Live In</Typography>
        <Typography sx={tooltipSubHeading}>
          We use this information to apply the correct state tax and calculate
          your take home pay and savings.
        </Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>% Income Replacement</Typography>
        <Typography sx={tooltipSubHeading}>
          This is the % of your current income that you wish to receive during
          retirement. It is generally recommended that this number be between
          70% to 85%.
        </Typography>
      </Box>
    </Box>
  );
};
