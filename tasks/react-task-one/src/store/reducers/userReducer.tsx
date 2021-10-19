import { UserState, UserAction, UserActionTypes } from '../../types/userTypes';

const initialState: UserState = {
  user: {},
  loading: true,
  error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { ...state, loading: true }
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case UserActionTypes.FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}
