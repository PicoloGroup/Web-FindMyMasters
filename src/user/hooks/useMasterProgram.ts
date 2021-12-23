import { map } from 'rxjs/operators';
import {
  UseMutationResult, useMutation, useQueryClient, QueryFunction, UseQueryResult, useQuery, QueryKey,
} from 'react-query';
import { University } from '../models/university.model';
import { fetchGet } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { cachedQueryOptions } from '../../common/queryOptions';
import { GetCurrentUniversityResponse } from '../models/response/GetCurrentUniversityResponse';
import useUser from './useUser';
import useUniversity from './useUniversity';
import { GetMasterProgramsResponse } from '../models/response/GetMasterProgramsResponse';
import { MasterProgram } from '../models/mprogram.model';
import { GetMasterProgramResponse } from '../models/response/GetMasterProgramResponse';

const getMasterProgram = (
  masterProgramId: number,
): Promise<GetMasterProgramResponse> => fetchGet<GetMasterProgramResponse>(`/program/${masterProgramId}`)
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useMasterProgram = (id: number): UseQueryResult<MasterProgram, ApiError> => {
  return useQuery(["program", id], () => getMasterProgram(id), {
    ...cachedQueryOptions
  });
};

export default useMasterProgram;