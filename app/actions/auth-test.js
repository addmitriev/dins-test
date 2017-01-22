import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as authActions from './auth';
import * as authTypes  from '../constants/auth';

import fetchMock from 'fetch-mock';
import 'isomorphic-fetch'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Authorization', ()=> {
  afterEach(()=> {
    fetchMock.restore();
  });

  it('creates GET_TOKEN_SUCCESS when fetching token has been done', ()=> {
    fetchMock.mock('/token.json', { code: 200, token: 'token' });

    const expectedActions = [
      { type: authTypes.GET_TOKEN_REQUEST },
      { type: authTypes.GET_TOKEN_SUCCESS, payload: { code: 200, token: 'token' } },
    ];

    const store = mockStore({ token: null });

    const email = 'any@example.com';
    const password = '12345678';

    return store.dispatch(authActions.auth(email, password)).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});