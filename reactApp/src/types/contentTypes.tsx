export enum ContentActionTypes {
  SET_ALBUMS_LIST_VIEW_STATE = 'SET_ALBUMS_LIST_VIEW_STATE',
  SET_PHOTOS_LIST_VIEW_STATE = 'SET_PHOTOS_LIST_VIEW_STATE',
}

export interface ContentState {
  viewState: string;
}

interface SetAlbumsListViewStateAction {
  type: ContentActionTypes.SET_ALBUMS_LIST_VIEW_STATE;
  payload: string;
}

interface SetPhotosListViewStateAction {
  type: ContentActionTypes.SET_PHOTOS_LIST_VIEW_STATE;
  payload: string;
}

export type ContentAction = SetAlbumsListViewStateAction | SetPhotosListViewStateAction;
