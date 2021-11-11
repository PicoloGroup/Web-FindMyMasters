class ApiError extends Error {
  statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function instanceOfApiError(object: any): object is ApiError {
  return 'statusCode' in object && 'message' in object;
}

export default ApiError;
