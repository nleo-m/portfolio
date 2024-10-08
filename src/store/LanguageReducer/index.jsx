import { createSlice } from "@reduxjs/toolkit";
import languages from "../../../locales/languages";

const initialState = {
  languages: ["br", "en", "fr"],
  currLang: "br",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    nextLang: (state) => {
      state.currLang =
        state.languages[
          (state.languages.indexOf(state.currLang) + 1) % state.languages.length
        ];
    },
  },
});

export const { nextLang } = languageSlice.actions;

export default languageSlice.reducer;
