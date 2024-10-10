import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languages: ["br", "en", "fr"],
  currLang: localStorage.getItem("@mfjl-language") || "br",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    nextLang: (state) => {
      const lang =
        state.languages[
          (state.languages.indexOf(state.currLang) + 1) % state.languages.length
        ];

      state.currLang = lang;
      localStorage.setItem("@mfjl-language", lang);
    },
  },
});

export const { nextLang } = languageSlice.actions;

export default languageSlice.reducer;
