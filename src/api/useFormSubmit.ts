import type { Result, RequestBody } from '@/context/form/types';

import { useMutation } from 'react-query';
import { useApi } from './Api';

export const useFormSubmit = () => {
  const Api = useApi();

  return useMutation({
    mutationKey: ['submitted_form_values'],
    mutationFn: (body: RequestBody) => Api.post<Result>(`/v1/plan`, body),
  });
};
