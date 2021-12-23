import { map } from 'rxjs/operators';
import {
  UseQueryResult, useQuery,
} from 'react-query';
import { University } from '../models/university.model';
import { fetchGet } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { cachedQueryOptions } from '../../common/queryOptions';
import { GetCurrentUniversityResponse } from '../models/response/GetCurrentUniversityResponse';
import useUser from './useUser';

const getUniversity = (
  universityId: number,
): Promise<GetCurrentUniversityResponse> => fetchGet<GetCurrentUniversityResponse>(`/university/${universityId}`)
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useUniversity = (): UseQueryResult<University, ApiError> => {
  const {data: user} = useUser();
  const universityId = user?.universityId;
  return useQuery(["university", universityId], () => getUniversity(universityId!), {
    ...cachedQueryOptions,
    enabled: !!universityId
  });
};

export default useUniversity;