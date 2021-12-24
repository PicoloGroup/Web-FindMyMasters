import { map } from 'rxjs/operators';
import {
  UseQueryResult, useQuery,
} from 'react-query';
import { fetchGet } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { cachedQueryOptions } from '../../common/queryOptions';
import { GetQuickApplicationsResponse } from '../models/response/GetQuickApplicationsResponse';
import { QuickApplicaton } from '../models/quick-app.model';
import useUniversity from './useUniversity';
import { quickApplications } from '../data/applicants';

const getQuickApplicationsMock = (
  universityId: number,
): Promise<GetQuickApplicationsResponse> => new Promise((resolve,reject) => resolve(quickApplications))

const getQuickApplications = (
  universityId: number,
): Promise<GetQuickApplicationsResponse> => fetchGet<GetQuickApplicationsResponse>(`/university/${universityId}/quick-applications`)
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useQuickApplications = (): UseQueryResult<QuickApplicaton[], ApiError> => {
  const {data: university} = useUniversity();
  const universityId = university?.id;
  return useQuery(["university", universityId, "quick-applications"], () => getQuickApplicationsMock(universityId!), {
    ...cachedQueryOptions,
    enabled: !!universityId
  });
};

export default useQuickApplications;