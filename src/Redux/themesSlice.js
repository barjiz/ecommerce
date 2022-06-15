import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
    mobile: "768px",
    darkmode: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkTheme(state) {
            // state.colors.header = state.darkmode ? "#324B50" : "#ebfbff";
            // state.colors.body = state.darkmode ? "#445155" : "#fff";
            state.darkmode = !state.darkmode;
        },
    },
});

export const { setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
