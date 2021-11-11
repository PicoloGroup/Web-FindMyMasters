import { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';
import API from './api';

function fetchData<T>(
  url: string,
  requestMethod: 'GET' | 'POST' | 'PUT' | 'DELETE',
  reqBody?: unknown,
): Observable<AxiosResponse<T>> {
  let body;
  if (reqBody !== undefined) {
    body = JSON.stringify(reqBody);
  }

  const bearerToken = localStorage.getItem('bearer');

  if (bearerToken !== null) {
    return from(
      API.request<T>({
        method: requestMethod,
        url,
        data: body,
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }),
    );
  }
  return from(
    API.request<T>({
      method: requestMethod,
      url,
      data: body,
    }),
  );
}

export function fetchGet<T>(url: string): Observable<AxiosResponse<T>> {
  return fetchData(url, 'GET', undefined);
}

export function fetchPost<T>(
  url: string,
  body?: unknown,
): Observable<AxiosResponse<T>> {
  return fetchData(url, 'POST', body);
}

export function fetchPut<T>(
  url: string,
  body?: unknown,
): Observable<AxiosResponse<T>> {
  return fetchData(url, 'PUT', body);
}

export function fetchDelete(
  url: string,
): Observable<AxiosResponse<void>> {
  return fetchData(url, 'DELETE', undefined);
}
