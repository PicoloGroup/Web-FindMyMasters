import React from "react";
import "./App.css";
import AuthContainer from './auth/AuthContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import PrivateRoute from './util/PrivateRoute';

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={DashboardContainer} />
          <Route path="/auth" component={AuthContainer} />
          <Route path="*">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
        
      </Router>
    </QueryClientProvider>
  );
};

export default App;
