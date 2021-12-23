import { map } from 'rxjs/operators';
import {
  UseQueryResult, useQuery,
} from 'react-query';
import { fetchGet } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { cachedQueryOptions } from '../../common/queryOptions';
import { MasterProgram } from '../models/mprogram.model';
import { GetMasterProgramResponse } from '../models/response/GetMasterProgramResponse';
import masterPrograms from '../data/master-programs';

const getMasterProgramMock = (
  masterProgramId: number
): Promise<GetMasterProgramResponse> => new Promise((resolve, reject) => {
  if(masterProgramId >= masterPrograms.length) {
    reject(null);
  }
  resolve(masterPrograms[masterProgramId])
});

const getMasterProgram = (
  masterProgramId: number,
): Promise<GetMasterProgramResponse> => fetchGet<GetMasterProgramResponse>(`/program/${masterProgramId}`)
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useMasterProgram = (id: number): UseQueryResult<MasterProgram, ApiError> => {
  return useQuery(["program", id], () => getMasterProgramMock(id), {
    ...cachedQueryOptions
  });
};

export default useMasterProgram;