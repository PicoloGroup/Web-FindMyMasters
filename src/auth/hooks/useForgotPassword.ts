import { map } from 'rxjs/operators';
import { useMutation, MutationFunction, UseMutationResult } from 'react-query';
import { fetchPost } from '../../common/fetch';
import catchApiError from '../../common/operators/catchApiError';
import ApiError from '../../common/models/api-error';
import { ForgotPasswordRequest } from '../models/request/forgot-password-request';

const forgotPassword: MutationFunction<void, ForgotPasswordRequest> = (
  forgotPasswordRequest: ForgotPasswordRequest,
): Promise<void> => fetchPost<void>('/university-auth/forgot-password', forgotPasswordRequest)
  .pipe(
    map(() => { }),
    catchApiError(),
  ).toPromise();

const useForgotPassword = (): UseMutationResult<void, ApiError,
  ForgotPasswordRequest, unknown> => useMutation(forgotPassword);

export default useForgotPassword;
