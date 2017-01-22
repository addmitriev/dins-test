import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './containers/main';

import MainComponent from './components/main';
import AuthComponent from './components/auth';

let appStore;

export const routes = {
  main: {
    component: MainComponent,
    onEnter: requireAuth
  },
  auth: {
    path: '/auth',
    component: AuthComponent,
    onEnter: skipAuth
  }
};

function requireAuth (_, replace) {
  if (appStore.getState().auth.token === null) {
    replace('/auth');
  }
}

function skipAuth (_, replace) {
  if (appStore.getState().auth.token !== null) {
    replace('/');
  }
}

export function makeRoutes (store) {
  appStore = store;

  return (
    <Route path="/" component={MainContainer}>
      <IndexRoute { ...routes.main } />
      <Route { ...routes.auth } />
    </Route>
  );
}