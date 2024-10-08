import { combineReducers, configureStore } from "@reduxjs/toolkit";

import themeSlice from "@/store/ThemeReducer";
import languageSlice from "./LanguageReducer";

const rootReducer = combineReducers({
  theme: themeSlice,
  language: languageSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
