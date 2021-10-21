export interface PhotosState {
  albumID: number,
  photosList: PhotoListConfig,
  loading: boolean;
  error: null | string;
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
  SET_ALBUM_ID = 'SET_ALBUM_ID',
  ADD_PHOTO = 'ADD_PHOTO',
}


interface FetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS;
}

interface FetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: PhotoListConfig;
}

interface FetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}

interface SetAlbumId {
  type: PhotosActionTypes.SET_ALBUM_ID;
  payload: number;
}

interface AddPhotoAction {
  type: PhotosActionTypes.ADD_PHOTO;
  payload: object;
}

export type PhotosAction = FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction
  | SetAlbumId
  | AddPhotoAction;

export interface PhotoListConfig {
  [key: string]: PhotoInfoConfig[];
}

export interface PhotoInfoConfig {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotoProps {
  photoInfo: PhotoInfoConfig;
}
