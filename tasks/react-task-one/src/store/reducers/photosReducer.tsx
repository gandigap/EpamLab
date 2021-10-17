import { PhotosAction, PhotosState, PhotosActionTypes } from '../../types/photosTypes';

const initialState: PhotosState = {
  albumID: 1,
  photosList: {},
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const photosReducer = (state = initialState, action: PhotosAction): PhotosState => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS:
      return { ...state, loading: true }
    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      return { ...state, loading: false, photosList: { ...state.photosList, [`${state.albumID}`]: action.payload } }
    case PhotosActionTypes.FETCH_PHOTOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case PhotosActionTypes.SET_PHOTOS_PAGE:
      return { ...state, page: action.payload }
    case PhotosActionTypes.SET_ALBUM_ID:
      return { ...state, albumID: action.payload }
    default:
      return state;
  }
}
