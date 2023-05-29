import { ISlider } from '@/components/input/Slider';
import {
  CHILD_COLLEGE_OPTIONS,
  days,
  months,
  RESULT_SECTION_ID,
  timePeriods,
} from '@/constants/constants';
import { FormValues } from '@/context/form/types';
import { DataPoint } from '@/types/global';
import tinycolor from 'tinycolor2';

export const isClient = () => typeof window !== 'undefined';

export function darkenColor(hexColor: string, percent = 50): string {
  const color = tinycolor(hexColor);
  const darkerColor = color.darken(percent);
  return darkerColor.toHexString();
}

export const getTimeAndDate = () => {
  const currentTime = new Date();
  let greet = '';
  const day = days[currentTime.getDay()];
  const date = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  const hours = currentTime.getHours();
  const dateMonth = day + ' ' + date + ' ' + month + ' ' + year + ' ';
  if (hours >= 5 && hours < 12) {
    greet = timePeriods[0];
  } else if (hours >= 12 && hours < 17) {
    greet = timePeriods[1];
  } else {
    greet = timePeriods[2];
  }
  return { day: dateMonth, greet };
};

export const formatNumberIntoCommas = (number: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const formattedNumber = formatter.format(number);
  return formattedNumber;
};

export const convertCommaStringBackToNumber = (val: string) =>
  parseFloat(`${val}`.replace(/,/g, ''));

export const addCommasToNumber = (value: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // add commas every 3 digits

export const getMinValue = (min?: number, inputType?: ISlider['inputType']) => {
  let res = '';

  switch (inputType) {
    case 'percent':
      res = `0%`;
      break;
    case 'money':
      res = '$0';
      break;
    default:
      res = ` ${min} `;
  }
  return res;
};

export const getSliderLabel = (
  value: number,
  inputType: ISlider['inputType']
) => {
  let res = '';
  switch (inputType) {
    case 'money':
      res = `$${formatNumberIntoCommas(value)}`;
      break;
    case 'percent':
      res = `${formatNumberIntoCommas(value)}%`;
      break;
    default:
      res = `$${formatNumberIntoCommas(value)}`;
  }
  return res;
};

export const getObjectKeys = <T extends {}>(obj: T) =>
  Object.keys(obj) as (keyof T)[];

export const getStepsRange = (value: number) => {
  let res = 0;

  switch (true) {
    case value >= 0 && value <= 50_000:
      res = 1000;
      break;
    case value > 50_000 && value <= 100_000:
      res = 5_000;
      break;
    case value > 100_000 && value <= 500_000:
      res = 10_000;
      break;
    case value > 500_000 && value <= 100_0000:
      res = 20_000;
      break;
    case value > 100_0000:
      res = 100_000;
      break;
    default:
      res = 1;
      break;
  }

  return res;
};

export const scrollToDestination = (id = RESULT_SECTION_ID) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export const getErrorMessage = (value: number, min: number, max: number) => {
  let res = '';
  switch (true) {
    case value > max:
      res = 'Max value exceeds';
      break;
    case value < min:
      res = `Min value: ${min}`;
  }

  return res;
};

export const getErrorIndicator = (value: number, min: number, max: number) =>
  value < min || value > max;

export const getTransformedRequest = (initialValues: FormValues) => {
  const goals: string[] = initialValues.goals.map((goal) => goal.toLowerCase());

  const person_details = {
    name: 'John Doe',
    current_age: initialValues.finalStep.retirementGoals.currentAge,
    state: initialValues.finalStep.retirementGoals.state,
  };

  const finance_details = {
    income: initialValues.incomeStep.incomeValue,
    annual_401k: initialValues.savingStep.KValue,
    ira: initialValues.savingStep.IRAValue,
    roth_ira: initialValues.savingStep.rothIraValue,
    retirement_balance: initialValues.assetStep.retirementBalanceValue,
    investment_balance: initialValues.assetStep.investmentBalanceValue,
    cash: initialValues.assetStep.cashValue,
  };

  let expense_details = {
    custom_expenses: initialValues.expenseStep.customExpenseValue || 0,
    expense_category: initialValues.expenseStep.expenseType,
  };

  if (expense_details.expense_category === 'custom') {
    delete expense_details.expense_category;
  } else {
    if (!!expense_details.custom_expenses) {
      expense_details = Object.assign({}, expense_details, {
        custom_expenses: undefined,
      });
    }
  }

  const kids_details = {
    kids: initialValues.kidsStep.map((kid, index) => {
      const { age } = kid;
      const currentCollegeOption =
        initialValues.finalStep.kidsGoals.goals[index];

      const isCustom = currentCollegeOption?.goalType === 'CUSTOM';

      const myType = isCustom
        ? 'CUSTOM'
        : CHILD_COLLEGE_OPTIONS.find(
            (item) => item.value === currentCollegeOption.collegeOptions
          )?.type;

      const { type, fee, percentage } = {
        type: myType,
        fee: !isCustom
          ? currentCollegeOption.collegeOptions
          : currentCollegeOption?.customValue,
        percentage: currentCollegeOption.fundingPercentage / 100,
      };

      const college_options = {
        type,
        fee,
      };

      return {
        age,
        already_saved: kid.alreadySaved,
        monthly_contribution: kid.monthlyContribution,
        college_type: type,
        percentage_funding: percentage,
        college_options,
      };
    }),
  };

  const assumptions = {
    inflation:
      initialValues.finalStep.retirementGoals.assumptions.inflation! / 100,
    wage_growth:
      initialValues.finalStep.retirementGoals.assumptions.wageGrowth! / 100,
    target_return_rate_before:
      initialValues.finalStep.retirementGoals.assumptions
        .targetReturnRateBefore! / 100,
    target_return_rate_during:
      initialValues.finalStep.retirementGoals.assumptions
        .targetReturnRateDuring! / 100,
    college_fee_growth:
      initialValues.finalStep.kidsGoals.assumptions.netAnnualCollegeSaving! /
      100,
    college_saving_growth_rate:
      initialValues.finalStep.kidsGoals.assumptions.annualGrowthRate! / 100,
  };

  const retirement_goals = {
    percentage_expense_replace_retirement:
      initialValues.finalStep.retirementGoals.replaceRetirement! / 100,
    other_income:
      initialValues.finalStep.retirementGoals.assumptions.otherIncome,
    social_security:
      initialValues.finalStep.retirementGoals.assumptions.socialSecurity,
  };

  const home_buying_goals = {
    age_to_buy: initialValues.finalStep.homeBuyingGoals.ageToBuy,
    down_payment_percent:
      initialValues.finalStep.homeBuyingGoals.downPaymentPercent,
    current_month_rent:
      initialValues.finalStep.homeBuyingGoals.currentMonthRent,
    desired_home_price:
      initialValues.finalStep.homeBuyingGoals.desiredHomePrice,
    down_payment: initialValues.finalStep.homeBuyingGoals.downPayment,
    hoa_fee_per_month:
      initialValues.finalStep.homeBuyingGoals.assumptions.hoaFeePerMonth,
    property_tax_rate:
      initialValues.finalStep.homeBuyingGoals.assumptions.propertyTaxRate,
    mortgage_interest_rate:
      initialValues.finalStep.homeBuyingGoals.assumptions.mortgageInterestRate,
  };

  const transformedObj = {
    goals,
    person_details,
    expense_details,
    kids_details,
    assumptions,
    retirement_goals,
    home_buying_goals,
    finance_details,
  };

  return transformedObj;
};

export function formatNumber(number: number): string {
  if (number > Number.MAX_SAFE_INTEGER) Infinity;
  const absNumber = Math.abs(number);
  let suffix = '';

  if (absNumber >= 1e18) {
    suffix = 'E';
    number /= 1e18;
  } else if (absNumber >= 1e15) {
    suffix = 'P';
    number /= 1e15;
  } else if (absNumber >= 1e12) {
    suffix = 'T';
    number /= 1e12;
  } else if (absNumber >= 1e9) {
    suffix = 'B';
    number /= 1e9;
  } else if (absNumber >= 1e6) {
    suffix = 'M';
    number /= 1e6;
  } else if (absNumber >= 1e3) {
    suffix = 'K';
    number /= 1e3;
  }

  let formattedNumber = Number.parseFloat(number.toFixed(2)).toString();
  const decimalIndex = formattedNumber.indexOf('.');

  if (decimalIndex === -1) {
    formattedNumber += '.00';
  } else if (formattedNumber.length - decimalIndex - 1 < 2) {
    formattedNumber += '0';
  }

  if (formattedNumber.length > 6) {
    formattedNumber =
      formattedNumber.slice(0, -6) +
      ',' +
      formattedNumber.slice(-6, -3) +
      '.' +
      formattedNumber.slice(-3) +
      suffix;
  } else {
    formattedNumber += suffix;
  }

  return formattedNumber;
}

export function skipInterval(data: DataPoint[], interval: number): DataPoint[] {
  const result: DataPoint[] = [];
  let i = 0;
  while (i < data.length) {
    result.push(data[i]);
    i += interval;
  }
  return result;
}

export const formatAsCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
};
