import React, { useState } from 'react';
import {
  Button, CircularProgress, TextField, Alert, AlertTitle,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useLogin from '../hooks/useLogin';
import logoFullPng from '../../resources/logo_full.png';
import logoFullWebp from '../../resources/logo_full.webp';
import { validateEmail, validatePassword } from '../../util/validators';

const useStyles = makeStyles(() => ({
  busyCard: {
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '1rem',
      top: 0,
      left: 0,
      background: 'white',
      opacity: 0.6,
    },
  },
  progress: {
    position: 'absolute',
    top: 'calc(50% - 32px)',
    left: 'calc(50% - 32px)',
  },
}));

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const {
    mutate: login, status, data, error,
  } = useLogin();
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailErr = validateEmail(email);
    setEmailError(emailErr);
    const passwordErr = validatePassword(password);
    setPasswordError(passwordErr);

    if (emailErr !== '' || passwordErr !== '') {
      return;
    }

    login({
      email,
      password,
    });
  };

  const classes = useStyles();
  let progressElement = null;
  if (status === 'loading') {
    progressElement = (
      <CircularProgress
        className={classes.progress}
        size={64}
        data-testid="progress-indicator"
      />
    );
  }

  let alertElement = null;

  if (status === 'error') {
    alertElement = (
      <Alert severity="error" className="mb-4 w-full">
        <AlertTitle>Giriş Başarısız</AlertTitle>
        {error?.message}
      </Alert>
    );
  } else if (status === 'success' && data !== undefined) {
    // this will be most of the time unseen since redirection is instant
    // however, still useful for testing
    alertElement = (
      <Alert severity="success" className="mb-4 w-full">
        <AlertTitle>Giriş Başarılı</AlertTitle>
        Ana sayfaya yönlendiriliyorsunuz...
      </Alert>
    );
  }

  return (
    <div className="flex w-screen h-screen bg-gradient-to-r from-secondary-main to-primary-main">
      <div
        className="relative overflow-hidden m-auto flex justify-center max-w-lg"
        data-testid="container-card"
      >
        {progressElement}
        <div
          className={clsx('rounded-xl shadow-xl p-8 sm:p-16 bg-white flex flex-col items-center',
            {
              [classes.busyCard]: status === 'loading',
            })}
          aria-busy={status === 'loading'}
        >
          <picture>
            <source srcSet={logoFullWebp} type="image/webp" />
            <img src={logoFullPng} className="w-64" alt="Unicourse Logo" />
          </picture>
          <h1 className="text-2xl text-gray-900 font-bold my-4">
            Eğitmen Portalı
          </h1>
          {alertElement}
          <form onSubmit={submit}>
            <TextField
              variant="outlined"
              id="login-input-email"
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              error={emailError !== ''}
              helperText={emailError}
              className="w-full pb-4"
              onChange={(event) => setEmail(event.target.value)}
              onBlur={() => setEmailError(validateEmail(email))}
            />
            <TextField
              variant="outlined"
              label="Şifre"
              autoComplete="current-password"
              id="login-input-password"
              type="password"
              value={password}
              className="w-full pb-2"
              error={passwordError !== ''}
              helperText={passwordError}
              onChange={(event) => setPassword(event.target.value)}
              onBlur={() => setPasswordError(validatePassword(password))}
            />
            <Link
              to="/forgot-password"
              className="text-sm float-right mr-2 transition duration-200 ease-in-out hover:text-gray-900 text-gray-600 hover:underline"
            >
              Şifreni mi unuttun?
            </Link>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="w-full my-4 py-4"
            >
              Giriş Yap
            </Button>
          </form>
          <div className="w-full flex justify-around text-xs">
            <a
              href="https://unicourse.co/terms/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 ease-in-out hover:text-gray-900 text-gray-600 hover:underline"
            >
              Gizlilik ve KVKK
            </a>
            <a
              href="https://unicourse.co/terms/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 transition duration-200 ease-in-out hover:text-gray-900 text-gray-600 hover:underline"
            >
              Çerez Politikası
            </a>
            <a
              href="https://unicourse.co/terms/instructor"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 transition duration-200 ease-in-out hover:text-gray-900 text-gray-600 hover:underline"
            >
              Eğitmen Sözleşmesi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
