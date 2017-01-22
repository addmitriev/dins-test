import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constants/users';

const initialState = {
  users: [],
  fetching: false
};

export default function users (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, fetching: true };
    case GET_USERS_SUCCESS:
      return { ...state, fetching: false, users: action.payload.data.users };
    case GET_USERS_FAILURE:
      return { ...state, fetching: false };
    default:
      return state;
  }
}