import { map } from 'rxjs/operators';
import {
  UseMutationResult, useMutation, useQueryClient, QueryFunction, UseQueryResult, useQuery,
} from 'react-query';
import { User } from '../models/user.model';
import { fetchGet } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { GetCurrentUserResponse } from '../models/response/GetCurrentUserResponse';
import { cachedQueryOptions } from '../../common/queryOptions';

const getUser: QueryFunction<GetCurrentUserResponse> = (
  req: {},
): Promise<GetCurrentUserResponse> => fetchGet<GetCurrentUserResponse>('/auth')
  .pipe(
    map((response) => response.data),
    catchApiError(),
  ).toPromise();

const useUser = (): UseQueryResult<User, ApiError> => {
  return useQuery("currentUser", getUser, cachedQueryOptions);
};

export default useUser;