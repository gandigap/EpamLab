import { Dispatch } from "redux";
import { PhotosAction, PhotosActionTypes } from "../../types/photosTypes";
import axios from "axios";

export const fetchPhotos = (page = 1, limit = 10, albumID = 1) => {
  return async (dispatch: Dispatch<PhotosAction>) => {
    try {
      dispatch({ type: PhotosActionTypes.FETCH_PHOTOS });
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumID}/photos/`, {
        params: { _page: page, _limit: limit }
      });
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
        payload: "Error. When albums download"
      })
    }
  }
}

export const setPhotosPage = (page: number): PhotosAction => {
  return { type: PhotosActionTypes.SET_PHOTOS_PAGE, payload: page }
}

export const setAlbumId = (albumID: number): PhotosAction => {
  return { type: PhotosActionTypes.SET_ALBUM_ID, payload: albumID }
}