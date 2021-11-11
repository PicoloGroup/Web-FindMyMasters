import React from "react";
import "./App.css";
import LoginPage from "./auth/pages/LoginPage"
import ApplicationPage from "./ApplicationPage";
import AuthContainer from './auth/AuthContainer';

const App: React.FC = () => {
  return <AuthContainer />;
  // return <ApplicationPage />;
  // return <LoginPage />;
};

export default App;
