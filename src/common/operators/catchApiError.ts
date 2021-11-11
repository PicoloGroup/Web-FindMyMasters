import { catchError } from 'rxjs/operators';
import { AxiosError } from 'axios';
import { OperatorFunction } from 'rxjs';
import ApiError from '../models/api-error';

function catchApiError<T>(): OperatorFunction<T, T> {
  return catchError((error: AxiosError<ApiError>) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      throw new ApiError(
        'The request was made but no response was received. Please check your connection.',
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new ApiError(
        `İSomething happened in setting up the request: ${error.message}`,
      );
    }
  });
}

export default catchApiError;
