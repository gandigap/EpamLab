import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootStateReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;