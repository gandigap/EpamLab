import { ContentAction, ContentActionTypes } from "../../types/contentTypes";

export const setAlbumsListViewState = (): ContentAction => {
  return {
    type: ContentActionTypes.SET_ALBUMS_LIST_VIEW_STATE,
    payload: 'albums'
  }
}

export const setPhotosListViewState = (): ContentAction => {
  return {
    type: ContentActionTypes.SET_PHOTOS_LIST_VIEW_STATE,
    payload: 'photos'
  }
}