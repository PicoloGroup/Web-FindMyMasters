import React, { useState } from 'react';
import {
  Button, CircularProgress, TextField, Alert, AlertTitle,
} from '@mui/material';
import { ArrowBackRounded } from '@mui/icons-material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import logoFullPng from '../../resources/logo_full.png';
import logoFullWebp from '../../resources/logo_full.webp';
import useForgotPassword from '../hooks/useForgotPassword';
import { validateEmail } from '../../util/validators';

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

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const { mutate: forgotPassword, status, error } = useForgotPassword();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailErr = validateEmail(email);
    setEmailError(emailErr);

    if (emailErr !== '') {
      return;
    }

    forgotPassword({ email });
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
        <AlertTitle>İstek Başarısız</AlertTitle>
        {error?.message}
      </Alert>
    );
  } else if (status === 'success') {
    alertElement = (
      <Alert severity="success" className="mb-4 w-full">
        <AlertTitle>İsteğiniz Alındı</AlertTitle>
        Şifrenizi sıfırlamak için lütfen email adresinize gelen bağlantıyı kullanın.
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
          <h1 className="text-2xl text-gray-900 font-bold my-4">
            Şifremi Unuttum
          </h1>
          {alertElement}
          <form onSubmit={submit}>
            <TextField
              variant="outlined"
              id="forgot-password-input-email"
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="w-full mt-4 py-4"
            >
              Bağlantı Linki Gönder
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
