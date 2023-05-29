import AssetsStep from '@/components/stepForm/steps/AssetsStep';
import ExpensesStep from '@/components/stepForm/steps/ExpensesStep';
import FinalStep from '@/components/stepForm/steps/FinalStep';
import GoalStep from '@/components/stepForm/steps/GoalStep';
import IncomeStep from '@/components/stepForm/steps/IncomeStep';
import KidsDetailStep from '@/components/stepForm/steps/KidsDetailStep';
import SavingStep from '@/components/stepForm/steps/SavingStep';
import { getErrorIndicator, getObjectKeys } from '@/utils/utils';
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
        const isMaxExceeded = val.incomeValue > 2000000;
        res =
          typeof val.incomeValue !== 'number' ||
          val.incomeValue === 0 ||
          isMaxExceeded;
      }
      break;
    case 'expenseStep':
      {
        let val = formValues['expenseStep'];

        res =
          val.expenseType && val.expenseType === 'custom'
            ? !val.customExpenseValue
            : !val.customExpenseValue && !val.expenseType;
      }
      break;

    case 'savingStep':
      {
        let val = formValues['savingStep'];
        const isMaxExceeded = getObjectKeys(val).some(
          (item) => val[item] > 2000000
        );
        res = isMaxExceeded;
      }
      break;
    case 'assetStep':
      {
        let val = formValues['assetStep'];
        const isMaxExceeded = getObjectKeys(val).some(
          (item) => val[item] > 50_000_000
        );
        res = isMaxExceeded;
      }

      break;
    case 'kidsStep':
      {
        let val = formValues['kidsStep'];
        res = val.some((kid) => kid.age > 18);
      }
      break;
    case 'finalStep':
      {
        let val = formValues['finalStep'];
        let shouldDisableDueToAge = getErrorIndicator(
          val.retirementGoals.currentAge,
          18,
          100
        );

        const isHomeBuyingSelected = formValues['goals'].includes('HOME');
        const isRetirementPercentage =
          val.retirementGoals.replaceRetirement === null;
        const final = isHomeBuyingSelected
          ? val.retirementGoals.currentAge > val.homeBuyingGoals.ageToBuy
          : false;

        const isFundingPercentage = val.kidsGoals.goals.some(
          (goal) => !goal.fundingPercentage
        );

        res =
          shouldDisableDueToAge ||
          val.retirementGoals.state === null ||
          isRetirementPercentage ||
          isFundingPercentage ||
          final;
      }
      break;
    default:
      res = false;
  }

  return res;
};
