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

const getStudent = (
  studentId: number,
): Promise<GetStudentResponse> => fetchGet<GetStudentResponse>(`/student/${studentId}`)
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useStudent = (id: number): UseQueryResult<Student, ApiError> => {
  return useQuery(["program", id], () => getStudent(id), {
    ...cachedQueryOptions
  });
};

export default useStudent;