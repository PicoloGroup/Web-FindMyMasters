import { map } from 'rxjs/operators';
import {
  MutationFunction, UseMutationResult, useMutation, useQueryClient,
} from 'react-query';
import { UserLoginRequest } from '../models/request/user-login.request';
import { fetchPost } from '../../common/fetch';
import { UserLoginResponse } from '../models/response/user-login.response';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';

const login: MutationFunction<void, UserLoginRequest> = (
  loginRequest: UserLoginRequest,
): Promise<void> => fetchPost<UserLoginResponse>('/user-auth/login', loginRequest)
  .pipe(
    map((response) => {
      if (response.data.token) {
        localStorage.setItem('bearer', response.data.token);
      }
    }),
    catchApiError(),
  ).toPromise();

const useLogin = (): UseMutationResult<void, ApiError,
  UserLoginRequest, unknown> => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(['currentUser'], { exact: true });
    },
  });
};
export default useLogin;
