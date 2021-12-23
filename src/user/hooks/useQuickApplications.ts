import { map } from 'rxjs/operators';
import {
  UseMutationResult, useMutation, useQueryClient, QueryFunction, UseQueryResult, useQuery, QueryKey,
} from 'react-query';
import { fetchGet } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { cachedQueryOptions } from '../../common/queryOptions';
import { MasterProgram } from '../models/mprogram.model';
import { GetStudentResponse } from '../models/response/GetStudentResponse';
import { Student } from '../models/student.model';
import { GetQuickApplicationsResponse } from '../models/response/GetQuickApplicationsResponse';
import { QuickApplicaton } from '../models/quick-app.model';
import useUniversity from './useUniversity';

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
  return useQuery(["university", universityId, "quick-applications"], () => getQuickApplications(universityId!), {
    ...cachedQueryOptions,
    enabled: !!universityId
  });
};

export default useQuickApplications;