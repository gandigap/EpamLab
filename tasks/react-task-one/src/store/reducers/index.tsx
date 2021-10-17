import { combineReducers } from "redux";
import { albumsReducer } from "./albumsReducer";
import { contentReducer } from "./contentReducer";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({
  albums: albumsReducer,
  photos: photosReducer,
  content: contentReducer,
});

export type RootState = ReturnType<typeof rootReducer>