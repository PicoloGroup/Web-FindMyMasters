import { map } from 'rxjs/operators';
import { useMutation, MutationFunction, UseMutationResult } from 'react-query';
import { fetchPost } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { ResetPasswordRequest } from '../models/request/reset-password-request';

const resetPassword: MutationFunction<void, ResetPasswordRequest> = (
  resetPasswordRequest: ResetPasswordRequest,
): Promise<void> => fetchPost<void>('/university-auth/reset-password', resetPasswordRequest)
  .pipe(
    map(() => { }),
    catchApiError(),
  ).toPromise();

const useResetPassword = (): UseMutationResult<void, ApiError,
  ResetPasswordRequest, unknown> => useMutation(resetPassword);

export default useResetPassword;
