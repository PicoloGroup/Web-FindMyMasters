import React, { useState } from 'react';
import {
  Button, CircularProgress, TextField, Alert, AlertTitle,
} from '@mui/material';
import { ArrowBackRounded } from '@mui/icons-material';
import makeStyles from '@mui/styles/makeStyles';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import logoFullWebp from '../../resources/logo_full.webp';
import logoFullPng from '../../resources/logo_full.png';
import useResetPassword from '../hooks/useResetPassword';
import { validatePassword } from '../../util/validators';

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

const validatePasswordRepeat = (password: string, passwordRepeat: string): string => {
  if (password !== passwordRepeat) return 'Şifreler eşleşmiyor.';
  return '';
};

function useRouteQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPasswordPage: React.FC = () => {
  const query = useRouteQuery();
  const token = query.get('token');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [passwordRepeatError, setPasswordRepeatError] = useState<string>('');

  const { mutate: resetPassword, status, error } = useResetPassword();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const passwordErr = validatePassword(password);
    setPasswordError(passwordErr);

    const passwordRepeatErr = validatePasswordRepeat(password, passwordRepeat);
    setPasswordRepeatError(passwordRepeatErr);

    if (passwordErr !== '' || passwordRepeatErr !== '' || token === null) {
      return;
    }

    resetPassword({ newPassword: password, token });
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

  if (token === null) {
    alertElement = (
      <Alert severity="error" className="mb-4 w-full">
        <AlertTitle>Eksik Token</AlertTitle>
        Şifrenizi sıfırlamak için email adresinize gelen token içeren bağlantıyı kullanmalısınız.
      </Alert>
    );
  } else if (status === 'error' && error?.statusCode === 403) {
    alertElement = (
      <Alert severity="error" className="mb-4 w-full">
        <AlertTitle>Geçersiz Token</AlertTitle>
        Tokeniniz geçersiz veya süresi dolmuş.
        <Link
          to="/forgot-password"
          className="mx-1 transition duration-200 ease-in-out hover:text-gray-900 text-gray-600 hover:underline"
        >
          Şifremi Unuttum
        </Link>
        sayfasından yeni bir şifre sıfırlama emaili alabilirsiniz.
      </Alert>
    );
  } else if (status === 'error') {
    alertElement = (
      <Alert severity="error" className="mb-4 w-full">
        <AlertTitle>Şifre Sıfırlama Başarısız</AlertTitle>
        {error?.message}
      </Alert>
    );
  } else if (status === 'success') {
    alertElement = (
      <Alert severity="success" className="mb-4 w-full">
        <AlertTitle>Şifreniz Başarıyla Değiştirildi</AlertTitle>
        <Link
          to="/login"
          className="mr-1 transition duration-200 ease-in-out hover:text-gray-900 text-gray-600 hover:underline"
        >
          Giriş
        </Link>
        sayfasından yeni şifrenizle giriş yapabilirsiniz.
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
          <Button
            color="primary"
            variant="text"
            size="large"
            className="absolute top-0 left-0 ml-2 mt-2"
            startIcon={<ArrowBackRounded />}
            component={Link}
            to="/login"
          >
            Geri
          </Button>
          <picture>
            <source srcSet={logoFullWebp} type="image/webp" />
            <img src={logoFullPng} className="w-64" alt="Unicourse Logo" />
          </picture>
          {' '}
          <h1 className="text-2xl text-gray-900 font-bold my-4">
            Şifremi Sıfırla
          </h1>
          {alertElement}
          <form onSubmit={submit}>
            <TextField
              variant="outlined"
              label="Yeni Şifre"
              id="reset-password-password"
              type="password"
              autoComplete="new-password"
              value={password}
              className="w-full pb-2"
              error={passwordError !== ''}
              helperText={passwordError}
              onChange={(event) => setPassword(event.target.value)}
              onBlur={() => {
                setPasswordError(validatePassword(password));
                if (passwordRepeat !== '') {
                  setPasswordRepeatError(
                    validatePasswordRepeat(password, passwordRepeat),
                  );
                }
              }}
            />
            <TextField
              variant="outlined"
              label="Yeni Şifreyi Doğrulayın"
              id="reset-password-password-repeat"
              type="password"
              autoComplete="new-password"
              value={passwordRepeat}
              className="w-full pb-2"
              error={passwordRepeatError !== ''}
              helperText={passwordRepeatError}
              onChange={(event) => setPasswordRepeat(event.target.value)}
              onBlur={() => setPasswordRepeatError(
                validatePasswordRepeat(password, passwordRepeat),
              )}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="w-full mt-4 py-4"
            >
              Şifremi Sıfırla
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
