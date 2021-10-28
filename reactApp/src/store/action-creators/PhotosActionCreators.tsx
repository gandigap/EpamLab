import { Dispatch } from "redux";
import { PhotoInfoConfig, PhotosAction, PhotosActionTypes } from "../../types/photosTypes";

export const fetchPhotos = (albumID = 1) => {
  return function (dispatch: Dispatch<PhotosAction>) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumID}/photos/`)
      .then(response => {
        dispatch({ type: PhotosActionTypes.FETCH_PHOTOS });
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(json => {
        dispatch({
          type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
          payload: json
        })
      })
      .catch(error => {
        dispatch({
          type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
          payload: "Error. When albums download"
        })
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
}

export const setCurrentAlbumId = (albumID: number): PhotosAction => {
  return { type: PhotosActionTypes.SET_ALBUM_ID, payload: albumID }
}

export const addPhoto = (newPhoto: PhotoInfoConfig): PhotosAction => {
  return { type: PhotosActionTypes.ADD_PHOTO, payload: newPhoto }
}