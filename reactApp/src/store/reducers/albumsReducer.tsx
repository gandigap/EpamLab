import { AlbumsAction, AlbumsState, AlbumsActionTypes } from '../../types/albumsTypes';

const initialState: AlbumsState = {
  albumsList: {},
  loading: false,
  error: null
}

export const albumsReducer = (state = initialState, action: AlbumsAction): AlbumsState => {
  switch (action.type) {
    case AlbumsActionTypes.FETCH_ALBUMS:
      return { ...state, loading: true }
    case AlbumsActionTypes.FETCH_ALBUMS_SUCCESS:
      return { ...state, loading: false, albumsList: action.payload }
    case AlbumsActionTypes.FETCH_ALBUMS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case AlbumsActionTypes.ADD_ALBUM:
      return { ...state, albumsList: { ...state.albumsList, ...action.payload } }
    default:
      return state;
  }
}

