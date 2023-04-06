import * as Yup from 'yup';

export const validationSchema = Yup.object({
  goals: Yup.array().of(Yup.string()),
  incomeStep: Yup.object({
    incomeValue: Yup.number().min(0),
  }),
  savingStep: Yup.object({
    KValue: Yup.number().min(0),
    IRAValue: Yup.number().min(0),
    rothIraValue: Yup.number().min(0),
  }),
  assetStep: Yup.object({
    retirementBalanceValue: Yup.number().min(0),
    investmentBalanceValue: Yup.number().min(0),
    cashValue: Yup.number().min(0),
  }),
  expenseStep: Yup.object({
    customExpenseValue: Yup.number().min(0),
    expenseType: Yup.string().nullable(),
  }),
  kidsStep: Yup.array().of(
    Yup.object({
      name: Yup.string(),
      age: Yup.number().min(0),
    })
  ),
  finalStep: Yup.object({
    retirementGoals: Yup.object({
      currentAge: Yup.number().min(0),
      replaceRetirement: Yup.number().min(0),
      state: Yup.string().nullable(),
      assumptions: Yup.object({
        inflation: Yup.number().min(0),
        otherIncome: Yup.number().min(0),
        socialSecurity: Yup.number().min(0),
        targetReturnRateBefore: Yup.number().min(0),
        targetReturnRateDuring: Yup.number().min(0),
        wageGrowth: Yup.number().min(0),
      }),
    }),
    homeBuyingGoals: Yup.object({
      ageToBuy: Yup.number().min(0),
      currentMonthRent: Yup.number().min(0),
      desiredHomePrice: Yup.number().min(0),
      downPayment: Yup.number().min(0),
      assumptions: Yup.object({
        hoaFeePerMonth: Yup.number().min(0),
        propertyTaxRate: Yup.number().min(0),
        mortgageInterestRate: Yup.number().min(0),
      }),
    }),
    kidsGoals: Yup.array().of(Yup.string()),
  }),
});
