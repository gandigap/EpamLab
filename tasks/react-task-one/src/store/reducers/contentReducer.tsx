import { ContentState, ContentAction, ContentActionTypes } from '../../types/contentTypes';

const initialState: ContentState = {
  viewState: 'albums',
}

export const contentReducer = (state = initialState, action: ContentAction): ContentState => {
  switch (action.type) {
    case ContentActionTypes.SET_ALBUMS_LIST_VIEW_STATE:
      return { viewState: action.payload }
    case ContentActionTypes.SET_PHOTOS_LIST_VIEW_STATE:
      return { viewState: action.payload }
    default:
      return state;
  }
}
