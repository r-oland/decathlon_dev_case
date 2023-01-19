// Components==============
import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';
import axios from 'axios';
// =========================

export const getSportById = async (id: number) => {
  const { data } = await axios.get(
    `https://sports.api.decathlon.com/sports/${id}`
  );

  return data.data;
};

export default function useGetSportById(
  id: number,
  options?: UseQueryOptions<SportEntity>
) {
  const queryClient = useQueryClient();

  const query = useQuery<SportEntity>({
    queryKey: ['sports', id],
    queryFn: () => {
      // Retrieve subscribed sports data
      const fetchedSports: SportEntity[] | undefined = queryClient.getQueryData(
        ['sports']
      );

      // already fetched sports can hold the data we need, validating this first could be more performant than making another request
      const alreadyAvailableData = fetchedSports?.find((fs) => fs.id === id);

      if (alreadyAvailableData) return alreadyAvailableData;

      // Otherwise we make a request
      return getSportById(id);
    },
    ...options,
  });

  return query;
}
