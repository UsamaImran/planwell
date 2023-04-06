import React, { SetStateAction } from 'react';

export interface IForm {
  currentStep: number;
  currentFormStep: {
    name: keyof FormValues;
    disable: boolean;
    component: React.ReactNode;
  };
  stepSize: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  formValues: FormValues;
  isLoading: boolean;
  resetFormValues: () => void;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
  onFormValuesChange: <T extends keyof FormValues>(
    key: T,
    value: FormValues[T]
  ) => void;
}

export interface FormValues {
  goals: Goal[];
  incomeStep: IncomeStep;
  savingStep: SavingStep;
  assetStep: AssetStep;
  expenseStep: Partial<ExpenseStep>;
  kidsStep: KidsStep[];
  finalStep: FinalStep;
}

export type Goal = 'HOME' | 'COLLEGE' | 'FIRE';
export type ExpenseType = 'SUPER' | 'AVERAGE' | 'SPENDER';
interface IncomeStep {
  incomeValue: number;
}

interface SavingStep {
  KValue: number;
  IRAValue: number;
  rothIraValue: number;
}

interface AssetStep {
  retirementBalanceValue: number;
  investmentBalanceValue: number;
  cashValue: number;
}

interface ExpenseStep {
  expenseType: ExpenseType | null;
  customExpenseValue: number;
}

interface KidsStep {
  age: number;
  alreadySaved: number;
  monthlyContribution: number;
  assumptions?: { netAnnualCollegeSavings: number; annualGrowthRate: number };
}

interface RetirementGoals {
  currentAge: number;
  state: string;
  replaceRetirement: number;
  assumptions: Partial<{
    targetReturnRateBefore: number;
    targetReturnRateDuring: number;
    wageGrowth: number;
    inflation: number;
    socialSecurity: number;
    otherIncome: number;
  }>;
}
interface HomeBuyingGoals {
  desiredHomePrice: number;
  downPaymentPercent: number;
  downPayment: number;
  ageToBuy: number;
  currentMonthRent: number;
  assumptions: Partial<{
    mortgageInterestRate: number;
    propertyTaxRate: number;
    hoaFeePerMonth: number;
  }>;
}

interface KidsGoals {
  goalType: 'COLLEGE' | 'CUSTOM';
  fundingPercentage: number;
  customValue: number;
  collegeOptions: {
    title: string;
    type: 'PUBLIC_IN_STATE' | 'PUBLIC_OUT_STATE' | 'PRIVATE';
    value: number;
  };
}

interface FinalStep {
  retirementGoals: RetirementGoals;
  homeBuyingGoals: HomeBuyingGoals;
  kidsGoals: {
    goals: KidsGoals[];
    assumptions: Partial<{
      netAnnualCollegeSaving: number;
      annualGrowthRate: number;
    }>;
  };
}

export type FormValuesKeyTypes = {
  [K in keyof FormValues]: FormValues[K];
};

export const initialValues: FormValues = {
  goals: [],
  incomeStep: { incomeValue: 0 },
  savingStep: { KValue: 0, IRAValue: 0, rothIraValue: 0 },
  assetStep: {
    retirementBalanceValue: 0,
    investmentBalanceValue: 0,
    cashValue: 0,
  },
  expenseStep: { customExpenseValue: 0, expenseType: null },
  kidsStep: [],
  finalStep: {
    retirementGoals: {
      currentAge: 0,
      replaceRetirement: 0,
      state: '',
      assumptions: {
        inflation: 2.5,
        otherIncome: 0,
        socialSecurity: 19370,
        targetReturnRateBefore: 7.0,
        targetReturnRateDuring: 5.0,
        wageGrowth: 3.0,
      },
    },
    homeBuyingGoals: {
      ageToBuy: 0,
      downPaymentPercent: 0,
      currentMonthRent: 0,
      desiredHomePrice: 0,
      downPayment: 0,
      assumptions: {
        hoaFeePerMonth: 0,
        propertyTaxRate: 1.25,
        mortgageInterestRate: 6.94,
      },
    },
    kidsGoals: {
      goals: [],
      assumptions: { netAnnualCollegeSaving: 5.0, annualGrowthRate: 4.0 },
    },
  },
};
