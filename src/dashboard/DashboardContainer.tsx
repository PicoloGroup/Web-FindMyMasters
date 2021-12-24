import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardHomePage from './pages/DashboardHomePage';

interface DashboardContainerParams {
  match: {url: string}
}

const DashboardContainer: React.FC<DashboardContainerParams> = ({match}: DashboardContainerParams) => (
  <Switch>
    <Route exact path={`${match.url}/home`} component={DashboardHomePage} />
    <Route path="*">
      <Redirect to={`${match.url}/home`} />
    </Route>
  </Switch>
);

export default DashboardContainer;
