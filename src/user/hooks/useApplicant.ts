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

const getQuickApplicantMock = (
  studentId: number,
): Promise<QuickApplicaton> => new Promise((resolve, reject) => {
  if(studentId >= quickApplications.length) {
    reject(null);
  }
  resolve(quickApplications[studentId])
})

const getQuickApplicant = (
  studentId: number,
): Promise<QuickApplicaton | undefined> => fetchGet<QuickApplicaton>(`/quick-applicant/${studentId}`)
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useQuickApplicant = (studentId: number): UseQueryResult<QuickApplicaton, ApiError> => {
  return useQuery(["quick-applicant", studentId], () => getQuickApplicantMock(studentId), {
    ...cachedQueryOptions
  });
};

export default useQuickApplicant;