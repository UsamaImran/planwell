import { createSubscribable } from '@/utils/pubsub';
import React, { PropsWithChildren, useState } from 'react';
import { FormContextContainer } from './formContext';
import { getFormSteps } from './formHelpers';
import { FormValues, IForm, initialValues, Result } from './types';

function FormProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const formList = getFormSteps(formValues);
  const subscriber = createSubscribable<boolean>();

  const onFormValuesChange = <
    T extends keyof FormValues,
    Y extends FormValues[T]
  >(
    key: T,
    value: Y
  ) => setFormValues((prev) => ({ ...prev, [key]: value }));

  const resetForm = () => {
    setCurrentStep(0);
    setFormValues(initialValues);
  };

  const saveResult = (data: Result | null) => setResult(data);

  const contextValue: IForm = {
    currentFormStep: formList[currentStep],
    currentStep,
    formValues,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === formList.length - 1,
    isLoading,
    result,
    stepSize: formList.length,
    subscriber,
    saveResult,
    setCurrentStep,
    setIsLoading,
    resetForm,
    onFormValuesChange,
  };

  return (
    <FormContextContainer value={contextValue}>{children}</FormContextContainer>
  );
}

export default FormProvider;
