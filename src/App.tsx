import React from "react";
import "./App.css";
import AuthContainer from './auth/AuthContainer';
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <AuthContainer />
    </Router>
  );
};

export default App;
