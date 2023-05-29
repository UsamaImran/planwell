import { getTransformedRequest } from '@/utils/utils';
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
  result: Result | null;
  subscriber: {
    publish: (message: boolean) => void;
    subscribe: (event: (msg: boolean) => void) => () => boolean;
  };
  saveResult: (data: Result | null) => void;
  resetForm: () => void;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
  onFormValuesChange: <T extends keyof FormValues, Y extends FormValues[T]>(
    key: T,
    value: Y
  ) => void;
}

export type RequestBody = ReturnType<typeof getTransformedRequest>;

export interface Result {
  net_worth_by_age: { [key: string]: number };
  goal_summary: GoalSummary;
  [key: string]: any;
}

interface GoalSummary {
  home_buying_summary: any;
  kids_summary: KidsSummary[];
  retirement_summary: RetirementSummary;
}

export interface KidsSummary extends YearlyContributions {
  additional_contribution_needed: number;
  contribution_already_making: number;
  contribution_needed: number;
  status: string;
  goal_age: number;
}

export interface YearlyContributions {
  yearly_contribution_needed: number;
  current_yearly_contributions: number;
  additional_yearly_contribution_needed: number;
}

interface RetirementSummary extends YearlyContributions {
  earliest_retirement_age: number;
  retirement_additional_contribution_needed: number;
  retirement_contribution_already_making: number;
  retirement_contribution_needed: number;
  your_target_retirement_age: number;
  retirement_status: string;
  suggested_action: string;
  goal_age: number;
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
export type ExpenseType = 'super_saver' | 'moderate' | 'high' | 'custom';
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
  expenseType?: ExpenseType | null;
  customExpenseValue?: number | null;
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
  replaceRetirement: number | null;
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
  collegeOptions: number;
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
  expenseStep: { customExpenseValue: null, expenseType: 'moderate' },
  kidsStep: [],
  finalStep: {
    retirementGoals: {
      currentAge: 30,
      replaceRetirement: 70,
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
