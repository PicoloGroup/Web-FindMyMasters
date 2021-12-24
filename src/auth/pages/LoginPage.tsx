import React, { useState } from "react";
import {
  CircularProgress, Alert, AlertTitle, FormHelperText,
} from '@mui/material';
import useLogin from '../hooks/useLogin';
import logoSvg from "../../resources/logo.svg";
import { validateUsername, validatePassword } from '../../util/validators';
import { Redirect } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const {
    mutate: login, status, data, error,
  } = useLogin();

  const token = localStorage.getItem("bearer")
  const isLoggedIn = token !== null && token !== undefined
  if(isLoggedIn)
    return <Redirect to="/dashboard" />

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usernameErr = validateUsername(username);
    setUsernameError(usernameErr);
    const passwordErr = validatePassword(password);
    setPasswordError(passwordErr);

    if (usernameErr !== '' || passwordErr !== '') {
      return;
    }

    login({
      username,
      password,
    });
  };

  let progressElement = null;
  if (status === 'loading') {
    progressElement = (
      <CircularProgress
        style={{
          position: 'absolute',
          top: 'calc(50% - 32px)',
          left: 'calc(50% - 32px)',
        }}
        size={64}
        data-testid="progress-indicator"
      />
    );
  }

  let alertElement = null;

  if (status === 'error') {
    alertElement = (
      <Alert severity="error" className="mb-4 w-full">
        <AlertTitle>Login Failed</AlertTitle>
        {error?.message}
      </Alert>
    );
  } else if (status === 'success' && data !== undefined) {
    // this will be most of the time unseen since redirection is instant
    // however, still useful for testing
    alertElement = (
      <Alert severity="success" className="mb-4 w-full">
        <AlertTitle>Login succesful</AlertTitle>
        You're   redirected to home page.
      </Alert>
    );
  }

  return (
    <>
      <div className="min-h-full min-h-screen flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <picture>
                <source srcSet={logoSvg} type="image/svg" />
                <img
                  src={logoSvg}
                  className="w-32"
                  alt="Find My Masters Logo"
                />
              </picture>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                {progressElement}
                {alertElement}
                <form className="space-y-6" onSubmit={submit}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        onBlur={() => setUsernameError(validateUsername(username))}
                      />
                      <FormHelperText id="email-helper-text" error={usernameError !== ''}>{usernameError}</FormHelperText>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        onChange={(event) => setPassword(event.target.value)}
                        onBlur={() => setPasswordError(validatePassword(password))}
                      />
                      <FormHelperText id="password-helper-text" error={passwordError !== ''}>{passwordError}</FormHelperText>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-red-600 hover:text-red-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1504817343863-5092a923803e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
