import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: localStorage.getItem("@mfjl-color") || "green",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    hackThePlanet: (state) => {
      const color = state.color === "green" ? "red" : "green";
      state.color = color;
      localStorage.setItem("@mfjl-color", color);
    },
  },
});

export const { hackThePlanet } = themeSlice.actions;

export default themeSlice.reducer;
