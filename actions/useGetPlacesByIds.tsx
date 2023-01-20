// Components==============
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
// =========================

export const getPlacesById = async (id: number) => {
  if (!id) return [];

  const { data } = await axios.get(
    `https://sportplaces.api.decathlon.com/api/v1/places?country=NL&sports=${id}`
  );

  const response = (data as PlaceResponseEntity).data.features || [];

  return response;
};

export default function useGetPlacesById(
  id: number,
  options?: UseQueryOptions<PlaceEntity[]>
) {
  const query = useQuery<PlaceEntity[]>({
    queryKey: ['places', id],
    queryFn: () => getPlacesById(id),
    ...options,
  });

  return query;
}
