export interface UsersState {
  usersList: UserListConfig,
  authUserId: null | number,
  loading: boolean,
  error: null | string,
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USER',
  FETCH_USERS_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USER_ERROR',
  CHANGE_AUTH_USER_ID = 'CHANGE_AUTH_USER_ID',
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any;
}

interface FetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface ChangeAuthUserIdAction {
  type: UsersActionTypes.CHANGE_AUTH_USER_ID;
  payload: number;
}

export interface UserListConfig {
  [key: string]: UserInfoConfig;
}

export interface UserInfoConfig {
  id: number | null,
  name: string,
  username: string,
  email: string,
  address?: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website?: string,
  company?: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export type UsersAction = FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | ChangeAuthUserIdAction;

