import { GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE } from '../constants/auth';

const initialState = {
  token: null,
  fetching: false,
  error: null
};

export default function auth (state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return { ...state, fetching: true };
    case GET_TOKEN_SUCCESS:
      return { ...state, fetching: false, token: action.payload.data.token };
    case GET_TOKEN_FAILURE: {
      return { ...state, fetching: false, token: null, error: action.payload.error };
    }
    default:
      return state;
  }
}