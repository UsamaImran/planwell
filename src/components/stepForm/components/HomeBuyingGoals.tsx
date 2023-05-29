import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_SKIN, PRIMARY_BLUE } from '@/styles/colors';
import { addCommasToNumber } from '@/utils/utils';
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Accordion from '../../accordion/Accordion';
import Container from '../../container/Container';
import InputContainer from '../../container/InputContainer';
import InputSlider from '../../input/InputSlider';
import {
  commonStyles,
  incomeStepStyles,
  retirementAdditionalInfoStyles,
} from '../styles';

const {
  infoContainer,
  tooltipHeading: heading,
  downPaymentContainer,
} = commonStyles;
const { tooltipHeading, tooltipSubHeading } = incomeStepStyles;
const { tooltipContainer } = retirementAdditionalInfoStyles;

function HomeBuyingGoals() {
  const {
    formValues: { finalStep },
    onFormValuesChange,
  } = useFormContext();
  const { homeBuyingGoals, retirementGoals } = finalStep;

  const {
    downPayment,
    ageToBuy,
    currentMonthRent,
    desiredHomePrice,
    downPaymentPercent,
  } = homeBuyingGoals;

  useEffect(() => {
    handleDownPaymentChange(downPaymentPercent, desiredHomePrice);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desiredHomePrice, downPaymentPercent]);

  const handleValuesChange = <T extends keyof typeof homeBuyingGoals>(
    key: T,
    value: number
  ) => {
    onFormValuesChange('finalStep', {
      ...finalStep,
      homeBuyingGoals: { ...homeBuyingGoals, [key]: value },
    });
  };

  const handleDownPaymentChange = (value: number, desiredPrice: number) => {
    const finalValue = desiredPrice * (value / 100);
    handleValuesChange('downPayment', +finalValue.toFixed(0));
  };

  const getDownPaymentValue = () => {
    return addCommasToNumber(`${downPayment}`);
  };

  return (
    <InputContainer
      title='Home Buying Goals'
      backgroundColor={BACKGROUND_SKIN}
      additionalInformation={<AdditionalInformation />}
    >
      <InputSlider
        max={50_000_000}
        label='Home Budget'
        value={desiredHomePrice}
        onChangeValue={(value) =>
          handleValuesChange('desiredHomePrice', +value)
        }
      />

      <InputSlider
        displayInput={false}
        inputType='percent'
        max={100}
        step={1}
        inputReplacement={
          <Box sx={downPaymentContainer}>
            <Typography color={PRIMARY_BLUE}>
              ${getDownPaymentValue()}
            </Typography>
            <Typography variant='subtitle1' color={'gray'}>
              Downpayment Amount
            </Typography>
          </Box>
        }
        label='Down Payment'
        value={downPaymentPercent}
        onChangeValue={(value) =>
          handleValuesChange('downPaymentPercent', +value)
        }
      />
      <InputSlider
        label='Age at which you want to buy?'
        value={ageToBuy}
        type='age'
        inputType='age'
        min={retirementGoals.currentAge}
        max={100}
        step={1}
        onChangeValue={(value) => handleValuesChange('ageToBuy', +value)}
      />

      <InputSlider
        label='If you are currently renting, what is your monthly rent?'
        displaySlider={false}
        value={currentMonthRent}
        onChangeValue={(value) =>
          handleValuesChange('currentMonthRent', +value)
        }
      />
    </InputContainer>
  );
}

export default HomeBuyingGoals;

const AdditionalInformation = () => {
  const {
    formValues: {
      finalStep: { retirementGoals, homeBuyingGoals, kidsGoals },
    },
    onFormValuesChange,
  } = useFormContext();

  const { assumptions } = homeBuyingGoals;
  const { hoaFeePerMonth, propertyTaxRate, mortgageInterestRate } = assumptions;

  const handleValuesChange = <T extends keyof typeof assumptions>(
    key: T,
    value: any
  ) => {
    onFormValuesChange('finalStep', {
      homeBuyingGoals: {
        ...homeBuyingGoals,
        assumptions: { ...assumptions, [key]: value },
      },
      retirementGoals,
      kidsGoals,
    });
  };

  return (
    <Accordion title='View / Edit Assumptions'>
      <Container sx={infoContainer} tooltip={<AdditionalInfoTooltip />}>
        <InputSlider
          label='Mortgage interest rate'
          value={mortgageInterestRate!}
          displaySlider={false}
          inputType='percent'
          onChangeValue={(value) =>
            handleValuesChange('mortgageInterestRate', value)
          }
        />
        <InputSlider
          inputType='percent'
          label='Property Tax Rate'
          displaySlider={false}
          value={propertyTaxRate!}
          onChangeValue={(value) =>
            handleValuesChange('propertyTaxRate', value)
          }
        />
        <InputSlider
          label='HOA/ Other fees/ month'
          displaySlider={false}
          value={hoaFeePerMonth}
          onChangeValue={(value) => handleValuesChange('hoaFeePerMonth', value)}
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
        <Typography sx={tooltipHeading}>Mortgage Rate</Typography>
        <Typography sx={tooltipSubHeading}>
          You can change the mortgage rate you expect to get.
        </Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>Property tax rate</Typography>
        <Typography sx={tooltipSubHeading}>
          You can edit the property tax rate as needed.
        </Typography>
      </Box>
      <Box>
        <Typography sx={tooltipHeading}>HOA/ Other</Typography>
        <Typography sx={tooltipSubHeading}>
          If you expect any HOA or other charges, you can add them so that you
          can figure out the full payments.
        </Typography>
      </Box>
    </Box>
  );
};
