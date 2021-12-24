import { map } from 'rxjs/operators';
import {
  UseQueryResult, useQuery,
} from 'react-query';
import { fetchGet } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { cachedQueryOptions } from '../../common/queryOptions';
import useUniversity from './useUniversity';
import { GetMasterProgramsResponse } from '../models/response/GetMasterProgramsResponse';
import { MasterProgram } from '../models/mprogram.model';
import masterPrograms from '../data/master-programs';

const getMasterProgramsMock = (
  universityId: number
): Promise<GetMasterProgramsResponse> => new Promise((resolve, reject) => resolve(masterPrograms))

const getMasterPrograms = (
  universityId: number,
): Promise<GetMasterProgramsResponse> => fetchGet<GetMasterProgramsResponse>(`/university/${universityId}/program`)
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useMasterPrograms = (): UseQueryResult<MasterProgram[], ApiError> => {
  const {data: university} = useUniversity();
  const universityId = university?.id;
  return useQuery(["university", universityId, "programs"], () => getMasterProgramsMock(universityId!), {
    ...cachedQueryOptions,
    enabled: !!universityId
  });
};

export default useMasterPrograms;