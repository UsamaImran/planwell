import React, { PropsWithChildren, useState } from 'react';
import { FormContextContainer } from './formContext';
import { getFormSteps } from './formHelpers';
import { FormValues, IForm, initialValues } from './types';

function FormProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const formList = getFormSteps(formValues);

  const onFormValuesChange = <
    T extends keyof FormValues,
    Y extends FormValues[T]
  >(
    key: T,
    value: Y
  ) => setFormValues((prev) => ({ ...prev, [key]: value }));

  const resetFormValues = () => setFormValues(initialValues);

  const contextValue: IForm = {
    currentStep,
    stepSize: formList.length,
    currentFormStep: formList[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === formList.length - 1,
    formValues,
    isLoading,
    onFormValuesChange,
    setCurrentStep,
    setIsLoading,
    resetFormValues,
  };

  return (
    <FormContextContainer value={contextValue}>{children}</FormContextContainer>
  );
}

export default FormProvider;
