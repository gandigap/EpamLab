export enum AlbumsActionTypes {
  FETCH_ALBUMS = 'FETCH_ALBUMS',
  FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
  FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR',
  ADD_ALBUM = 'ADD_ALBUM',
}

export interface AlbumsState {
  albumsList: any;
  loading: boolean;
  error: null | string;
}

interface FetchAlbumsAction {
  type: AlbumsActionTypes.FETCH_ALBUMS;
}

interface FetchAlbumsSuccessAction {
  type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS;
  payload: any;
}

interface FetchAlbumsErrorAction {
  type: AlbumsActionTypes.FETCH_ALBUMS_ERROR;
  payload: string;
}

interface AddAlbumAction {
  type: AlbumsActionTypes.ADD_ALBUM;
  payload: object;
}

export type AlbumsAction = FetchAlbumsAction
  | FetchAlbumsErrorAction
  | FetchAlbumsSuccessAction
  | AddAlbumAction;
