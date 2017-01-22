import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constants/users';
import 'whatwg-fetch';

export function getUsers (query = null) {
  return dispatch => {
    dispatch({
      type: GET_USERS_REQUEST
    });

    let URL = '/users.json';

    if (query && (query.firstName || query.lastName)) {   // Use query with real api;
      URL = '/users-search.json';
    }

    return fetch(URL, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(json => {
      if (json.code === 200) {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: json
        })
      } else {
        dispatch({
          type: GET_USERS_FAILURE,
          payload: json
        })
      }
    }).catch(err => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: { error: err.message }
      })
    });
  }
}