import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

const AuthContainer: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/forgot-password" component={ForgotPasswordPage} />
    <Route exact path="/reset-password" component={ResetPasswordPage} />
    <Route path="*">
      <Redirect to="/login" />
    </Route>
  </Switch>
);

export default AuthContainer;
