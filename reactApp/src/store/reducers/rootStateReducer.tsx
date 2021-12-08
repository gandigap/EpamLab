import { combineReducers } from "redux";
import { albumsReducer } from "./albumsReducer";
import { photosReducer } from "./photosReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  albums: albumsReducer,
  photos: photosReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>