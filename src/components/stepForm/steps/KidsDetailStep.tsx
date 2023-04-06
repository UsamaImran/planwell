import { CHILD_COLLEGE_OPTIONS } from '@/constants/constants';
import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_PURPLE } from '@/styles/colors';
import { Box } from '@mui/material';
import React from 'react';
import Container from '../../container/Container';
import InputContainer from '../../container/InputContainer';
import InputSlider from '../../input/InputSlider';
import Select from '../../select/Select';
import { kidsStepStyles, commonStyles } from '../styles';

const { container } = kidsStepStyles;

function KidsDetailStep() {
  const {
    onFormValuesChange,
    formValues: { kidsStep, finalStep },
  } = useFormContext();

  const handleValueChange = (val: number) => {
    onFormValuesChange(
      'kidsStep',
      [...Array(val)].fill({ age: 18, alreadySaved: 0, monthlyContribution: 0 })
    );

    const option = CHILD_COLLEGE_OPTIONS[0];

    onFormValuesChange('finalStep', {
      ...finalStep,
      kidsGoals: {
        goals: [...Array(val)].fill({
          goalType: 'COLLEGE',
          fundingPercentage: 0,
          customValue: 0,
          collegeOptions: {
            title: option.title,
            type: option.type,
            value: option.value,
          },
        }),
        assumptions: finalStep.kidsGoals.assumptions,
      },
    });
  };

  return (
    <Container header='Kids College Details' sx={commonStyles.wrapperContainer}>
      <Box>
        <Box sx={container}>
          <Select
            options={[...Array(6)].map((_, index) => ({
              label: index + 1,
              value: index + 1,
            }))}
            value={kidsStep.length}
            onSelectOption={(val) => handleValueChange(val as number)}
          />
        </Box>
        <Box>
          {kidsStep.map((_, index) => (
            <ChildDetails key={index} currentIndex={index} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default KidsDetailStep;

const ChildDetails = ({ currentIndex }: { currentIndex: number }) => {
  const {
    formValues: { kidsStep },
    onFormValuesChange,
  } = useFormContext();

  const handleValuesChange = <T extends keyof typeof kidsStep[0]>(
    key: T,
    value: number | number[]
  ) => {
    const val = value as number;
    const currentKidObj = kidsStep[currentIndex];
    let final = [...kidsStep];
    final[currentIndex] = { ...currentKidObj, [key]: val };

    onFormValuesChange('kidsStep', final);
  };

  const currentKid = currentIndex + 1;

  return (
    <InputContainer
      backgroundColor={BACKGROUND_PURPLE}
      title={`Enter Details for child ${currentKid}`}
    >
      <InputSlider
        label='Age of Child'
        min={18}
        max={100}
        step={1}
        type='age'
        value={kidsStep[currentIndex]?.age || 0}
        onChangeValue={(val) => handleValuesChange('age', +val)}
      />
      <InputSlider
        label={`How much have you already saved for Child ${currentKid} college?`}
        value={kidsStep[currentIndex]?.alreadySaved || 0}
        onChangeValue={(val) => handleValuesChange('alreadySaved', +val)}
      />
      <InputSlider
        label='How much do you contribute every month?'
        value={kidsStep[currentIndex]?.monthlyContribution || 0}
        onChangeValue={(val) => handleValuesChange('monthlyContribution', +val)}
      />
    </InputContainer>
  );
};
