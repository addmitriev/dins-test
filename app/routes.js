import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainContainer from './containers/main';
import MainComponent from './components/main';

export const routes = {
  main: {
    component: MainComponent,
  }
};

export function makeRoutes () {
  return (
    <Route path="/" component={MainContainer}>
      <IndexRoute { ...routes.main } />
    </Route>
  );
}