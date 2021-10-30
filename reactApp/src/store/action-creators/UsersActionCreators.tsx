import { Dispatch } from "redux";
import { UserInfoConfig, UsersAction, UsersActionTypes, UserListConfig } from "../../types/usersTypes";

function getDataObject(arrayUsers: UserInfoConfig[]) {
  const objFinal: UserListConfig = {};
  arrayUsers.forEach((element: UserInfoConfig, index: number) => {
    objFinal[`${index + 1}`] = element;
  });
  return objFinal;
}

export const fetchUsers = () => {
  return function (dispatch: Dispatch<UsersAction>) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        dispatch({ type: UsersActionTypes.FETCH_USERS });
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(json => {
        dispatch({
          type: UsersActionTypes.FETCH_USERS_SUCCESS,
          payload: getDataObject(json)
        })
      })
      .catch(error => {
        dispatch({
          type: UsersActionTypes.FETCH_USERS_ERROR,
          payload: "Error. When albums download"
        })
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
}

/* export const addAlbum = (newAlbum: AlbumListConfig): AlbumsAction => {
  return { type: AlbumsActionTypes.ADD_ALBUM, payload: newAlbum }
} */