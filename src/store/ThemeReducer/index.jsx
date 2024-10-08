import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "green",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    hackThePlanet: (state) => {
      state.color = state.color === "green" ? "red" : "green";
    },
  },
});

export const { hackThePlanet } = themeSlice.actions;

export default themeSlice.reducer;
