// Components==============
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
// =========================

export const getSports = async () => {
  const { data } = await axios.get('https://sports.api.decathlon.com/sports');

  const response = (data as SportResponseEntity).data;
  return response;
};

export default function useGetSports(options?: UseQueryOptions<SportEntity[]>) {
  const query = useQuery<SportEntity[]>({
    queryKey: ['sports'],
    queryFn: getSports,
    ...options,
  });

  return query;
}
