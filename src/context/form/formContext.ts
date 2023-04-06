import { createContext, useContext } from 'react';
import { IForm } from './types';

export const FormContext = createContext<IForm>({} as IForm);
export const FormContextContainer = FormContext.Provider;

export const useFormContext = () => useContext(FormContext);
