import { Dispatch } from "redux";
import { AlbumsAction, AlbumsActionTypes } from "../../types/albumsTypes";

function getDataObject(array: any) {
  const objFinal: any = {};
  array.forEach((element: object, index: string) => {
    objFinal[index + 1] = element;
  });
  return objFinal;
}

export const fetchAlbums = () => {
  return function (dispatch: Dispatch<AlbumsAction>) {
    fetch(`https://jsonplaceholder.typicode.com/albums/`)
      .then(response => {
        dispatch({ type: AlbumsActionTypes.FETCH_ALBUMS });
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(json => {
        console.log(json, 'jsson')
        dispatch({
          type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS,
          payload: getDataObject(json)
        })
      })
      .catch(error => {
        dispatch({
          type: AlbumsActionTypes.FETCH_ALBUMS_ERROR,
          payload: "Error. When albums download"
        })
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
}

export const addAlbum = (newAlbum: object): AlbumsAction => {
  return { type: AlbumsActionTypes.ADD_ALBUM, payload: newAlbum }
}