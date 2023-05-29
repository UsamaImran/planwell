import { useMutation, useQuery } from 'react-query';
import { useApi } from './Api';

const POSTS_BASE_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

export const usePosts = () => {
  const Api = useApi();

  return useQuery({
    queryKey: 'posts',
    queryFn: () => Api.get<unknown[]>(POSTS_BASE_API_ENDPOINT),
    enabled: true,
  });
};

export const useGetSinglePost = (id: string) => {
  const Api = useApi();
  return useQuery({
    queryKey: ['posts', 'singlePost', id],
    queryFn: () => Api.get(`${POSTS_BASE_API_ENDPOINT}/${id}`),
    enabled: !!id,
  });
};

export const useCreatePost = () => {
  const Api = useApi();

  return useMutation({
    mutationKey: 'create Post',
    mutationFn: (body: Record<string, unknown>) =>
      Api.post(POSTS_BASE_API_ENDPOINT, body),
  });
};
