import { map } from 'rxjs/operators';
import {
  MutationFunction, UseMutationResult, useMutation, useQueryClient,
} from 'react-query';

const useLogout = (): UseMutationResult<void, void, {}, unknown> => {
  return useMutation((arg: {}) => new Promise<void>((resolve, reject) => {
    localStorage.removeItem('bearer');
    resolve();
  }));
};
export default useLogout;
