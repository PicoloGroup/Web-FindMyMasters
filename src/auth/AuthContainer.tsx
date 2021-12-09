import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

interface AuthContainerParams {
  match: {url: string}
}

const AuthContainer: React.FC<AuthContainerParams> = ({match}: AuthContainerParams) => (
  <Switch>
    <Route exact path={`${match.url}/login`} component={LoginPage} />
    <Route exact path={`${match.url}/forgot-password`} component={ForgotPasswordPage} />
    <Route exact path={`${match.url}/reset-password`} component={ResetPasswordPage} />
    <Route path="*">
      <Redirect to={`${match.url}/login`} />
    </Route>
  </Switch>
);

export default AuthContainer;
