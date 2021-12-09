import React from "react";
import "./App.css";
import AuthContainer from './auth/AuthContainer';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthContainer} />
          <Route path="*">
            <Redirect to="/auth" />
          </Route>
        </Switch>
        
      </Router>
    </QueryClientProvider>
  );
};

export default App;
