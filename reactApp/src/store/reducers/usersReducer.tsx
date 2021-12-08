import { UsersState, UsersAction, UsersActionTypes } from '../../types/usersTypes';

const initialState: UsersState = {
  usersList: {},
  authUserId: null,
  loading: false,
  error: null,
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { ...state, loading: true }
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, usersList: action.payload }
    case UsersActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case UsersActionTypes.CHANGE_AUTH_USER_ID:
      return { ...state, authUserId: action.payload }
    default:
      return state;
  }
}
