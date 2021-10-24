import { combineReducers } from "redux";
import { albumsReducer } from "./albumsReducer";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({
  albums: albumsReducer,
  photos: photosReducer,
});

export type RootState = ReturnType<typeof rootReducer>