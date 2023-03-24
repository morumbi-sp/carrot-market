import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

function useMutation<T = any>(
  url: string
): [(data?: FieldValues) => void, UseMutationState<T>] {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const { loading, data, error } = state;
  const mutation = (validForm?: FieldValues) => {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(validForm),
      headers: {
        'Content-Type': 'Application/json',
      },
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setState((prev) => ({ ...prev, data: json })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  };
  return [mutation, { loading, data, error }];
}

export default useMutation;
