import AssetsStep from '@/components/stepForm/steps/AssetsStep';
import ExpensesStep from '@/components/stepForm/steps/ExpensesStep';
import FinalStep from '@/components/stepForm/steps/FinalStep';
import GoalStep from '@/components/stepForm/steps/GoalStep';
import IncomeStep from '@/components/stepForm/steps/IncomeStep';
import KidsDetailStep from '@/components/stepForm/steps/KidsDetailStep';
import SavingStep from '@/components/stepForm/steps/SavingStep';
import { FormValues, IForm } from './types';

export const getFormSteps = (formValues: FormValues) => {
  const array: IForm['currentFormStep'][] = [
    {
      name: 'goals',
      disable: handleDisableButton('goals', formValues),
      component: <GoalStep />,
    },
    {
      name: 'incomeStep',
      disable: handleDisableButton('incomeStep', formValues),
      component: <IncomeStep />,
    },
    {
      name: 'savingStep',
      disable: handleDisableButton('savingStep', formValues),
      component: <SavingStep />,
    },
    {
      name: 'assetStep',
      disable: handleDisableButton('assetStep', formValues),
      component: <AssetsStep />,
    },
    {
      name: 'expenseStep',
      disable: handleDisableButton('expenseStep', formValues),
      component: <ExpensesStep />,
    },
    {
      name: 'kidsStep',
      disable: handleDisableButton('kidsStep', formValues),
      component: <KidsDetailStep />,
    },
    {
      name: 'finalStep',
      disable: handleDisableButton('finalStep', formValues),
      component: <FinalStep />,
    },
  ];

  const finalArray = !formValues.goals.includes('COLLEGE')
    ? array.filter((item) => item.name !== 'kidsStep')
    : array;

  return finalArray;
};

const handleDisableButton = <T extends keyof FormValues>(
  step: T,
  formValues: FormValues
) => {
  let res = false;

  switch (step) {
    case 'goals':
      {
        let val = formValues['goals'];
        res = val.length < 1;
      }
      break;
    case 'incomeStep':
      {
        let val = formValues['incomeStep'];
        res = typeof val.incomeValue !== 'number' || val.incomeValue === 0;
      }
      break;
    case 'expenseStep':
      {
        let val = formValues['expenseStep'];
        res = !val.customExpenseValue && !val.expenseType;
      }
      break;
    case 'finalStep':
      {
        let val = formValues['finalStep'];
        res =
          !val.retirementGoals.state ||
          val.homeBuyingGoals.ageToBuy < val.retirementGoals.currentAge;
      }
      break;
    default:
      res = false;
  }

  return res;
};
