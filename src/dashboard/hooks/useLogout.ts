import { map } from 'rxjs/operators';
import {
  MutationFunction, UseMutationResult, useMutation, useQueryClient,
} from 'react-query';

const useLogout = (): UseMutationResult<void, void, {}, unknown> => {
  const queryClient = useQueryClient();
  return useMutation((arg: {}) => new Promise<void>((resolve, reject) => {
    localStorage.removeItem('bearer');
    resolve();
  }), {
    onSuccess: () => {
      // Invalidate all queries to delete cached data from current user
      queryClient.invalidateQueries();
    },
  });
};
export default useLogout;
