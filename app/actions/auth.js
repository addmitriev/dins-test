import { GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE } from '../constants/auth';
import 'whatwg-fetch';

export function auth (/* email, password */) {
  return dispatch => {
    dispatch({
      type: GET_TOKEN_REQUEST
    });

    const URL = '/token.json';

    return fetch(URL, {
      method: 'GET', // Change to POST request
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      // body: `email=${email}&password=${password}` // Not supported with GET/HEAD request
    }).then(response => {
      return response.json();
    }).then(json => {
      if (json.code === 200) {
        dispatch({
          type: GET_TOKEN_SUCCESS,
          payload: json
        })
      } else {
        dispatch({
          type: GET_TOKEN_FAILURE,
          payload: json
        })
      }
    }).catch(err => {
      dispatch({
        type: GET_TOKEN_FAILURE,
        payload: { error: err.message }
      })
    });
  };
}