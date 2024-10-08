import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "@/store/ThemeReducer";

const rootReducer = combineReducers({
  theme: themeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
