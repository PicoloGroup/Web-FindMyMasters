import React from "react";
import "./App.css";
import AuthContainer from './auth/AuthContainer';
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthContainer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
