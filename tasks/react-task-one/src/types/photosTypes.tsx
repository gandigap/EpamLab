export interface PhotosState {
  albumID: number,
  photosList: any,
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
  SET_PHOTOS_PAGE = 'SET_PHOTOS_PAGE',
  SET_ALBUM_ID = 'SET_ALBUM_ID',
}

interface FetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS;
}

interface FetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: any;
}

interface FetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}

interface SetPhotosPage {
  type: PhotosActionTypes.SET_PHOTOS_PAGE;
  payload: number;
}

interface SetAlbumId {
  type: PhotosActionTypes.SET_ALBUM_ID;
  payload: number;
}

export type PhotosAction = FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction
  | SetPhotosPage
  | SetAlbumId;
